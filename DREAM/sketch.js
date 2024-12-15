let button; 
let entete;
let champ;
let inconsolata;
let diameter = 1;
let maxDiameter = 500000;
let vec = 1
function preload() {
  inconsolata = loadFont('asset/inconsolata.otf');
}
function setup() {
  createCanvas(windowWidth/3, windowHeight/3, WEBGL);
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
  entete = createElement('h2', 'WHAT IS YOUR DREAM ?');
  entete.position(20,5);
  
  champ = createInput();
  champ.changed(afficheTexte);
  champ.position(20, 65);
  
  //bouton = createButton("go");
  //bouton.mousePressed(afficheTexte);
  //bouton.position(210,67);
}
function afficheTexte() {

  //if (mouseY == 210 && mouseX ){ 
  background(0,100,255,150);
  text(+ champ.value(),0,120);

  
 
 // window.open("http://www.google.com", _self);
}
function draw() {
  
  //background(0,100,255,150);
  background(0);
  diameter = maxDiameter / sin (frameCount/300);
  let time = millis();
  //rotateX(time / 1000);
  rotateY(time /100000);
  textSize(diameter/20000, diameter*1000);
  textAlign(CENTER, CENTER);
  fill(random(150,255));
  text(champ.value(),0, -125);
  fill(random(150,255));
  text(-champ.value(),0, 125, 0);



  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(10, 10, 10);
  pointLight(255, 255, 255, locX, locY, 50);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  specularMaterial(255,0, 0);
  sphere(60);
  pop();
  
  push();
  translate(0,0,0);
  rotateZ(frameCount * -0.001);
  rotateX(frameCount * -0.001);
  rotateY(frameCount * -0.001);
  ambientMaterial(250);
  torus(100, 2, 64, 64);
  pop();
  
  push();
 translate(0,0,0);
  rotateZ(frameCount / 0.0000000001);
  rotateX(frameCount / 0.0000000001);
  rotateY(frameCount / 0.0000000001);
  torus(100, 2, 64, 5);
  pop();
  let radius = width * 1.5;
  
   push();
  translate(0,0,0);
  rotateZ(frameCount * -0.001);
  rotateX(frameCount * -0.0000001);
  rotateY(frameCount * -0.001);
  ambientMaterial(250, 40,40);
  torus(400, 2, 64, 64);
  pop();
  
  push();
 translate(0,0,0);
  rotateZ(frameCount * 0.0001);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.0001);
  torus(400, 2, 64, 64);
  pop();
 
  push();
  translate(0,0,0);
  rotateZ(frameCount * -0.0006);
  rotateX(frameCount * -0.0006);
  rotateY(frameCount * -0.0006);
  ambientMaterial(250);
  torus(1200, 2, 64, 64);
  pop();
  
  push();
 translate(0,0,0);
  rotateZ(frameCount * 0.0006);
  rotateX(frameCount * 0.0006);
  rotateY(frameCount * 0.0006);
  torus(1200, 2, 64, 64);
  pop();
  
  push();
  translate(0,0,0);
  rotateZ(frameCount * -0.0001);
  rotateX(frameCount * -0.0001);
  rotateY(frameCount * -0.0001);
  ambientMaterial(250);
  torus(2000, 10, 64, 64);
  pop();
  
  push();
 translate(0,0,0);
  rotateZ(frameCount * 0.0001);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.0001);
  torus(2000, 10, 64, 64);
  pop();
  
    push();
  translate(0,0,0);
  rotateZ(frameCount * -0.0001);
  rotateX(frameCount * -0.0001);
  rotateY(frameCount * -0.0001);
  ambientMaterial(250);
  torus(4000, 10, 64, 64);
  pop();
  
  push();
 translate(0,0,0);
  rotateZ(frameCount * 0.0001);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.0001);
  torus(4000, 10, 64, 64);
  pop();
  

  function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
  
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

  
  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, 0);
  for (let i = 0; i <= 70; i++) {
    for (let j = 0; j <= 30; j++) {
      push();
      let a = (j / PI) * PI;
      let b = (i / PI) * PI;
      translate(
        sin(1 * a) * frameCount - radius * sin(b),
        (cos(b-radius/PI) * frameCount ) / 1,
        cos(2 * a) * frameCount * sin(b-radius/a)
      );
      
  //rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
      if (j % 2 === 0) {
       // if (fr === 30) {
      //fr = 10;
     // frameRate(fr);
        
        specularMaterial(250, 200,60);
  sphere(10, 6, 2);
      } else {
  box(10);
  
      }
      pop();
      
    }
    
  }
}
function windowResized() {
  resizeCanvas(windowWidth/3, windowHeight/3);
}
