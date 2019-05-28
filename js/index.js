// Global Vars & Namespaces
var FBM = {};

// FBM Object & Methods 
FBM = {
	stickifySecondHeader : function() {
		var tct = $(window),
			tctTop = tct.scrollTop();

		if(tctTop > 20) {
			$('.fbm-header--secondary').css({
				'position': 'absolute',
				'top': -tctTop + 64
			});
		} else {
			$('.fbm-header--secondary').css({
				'position': 'relative',
				'top': 'auto'
			});
		}
	}
};

// Event Handlers
$(window).scroll(function onWindowResize() {
	FBM.stickifySecondHeader();
});