var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var img2 = document.getElementById('img2');
	var cta = document.getElementById('cta');
	var logo = document.getElementById('logo');
	var txt1 = document.getElementById('txt1');
	var t = TweenMax;
	var tl = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
		function start() {

		tl.to(img2, 1.5, {opacity:1, ease:Sine.easeInOut}, "+=.5")
	        .to(cta, 1.5, {opacity:1, ease:Sine.easeInOut}, "-=1.5")
	        .to(logo, 1.5, {opacity:1, ease:Sine.easeInOut}, "-=1.5")
	        .to(txt1, 1.5, {opacity:1, ease:Sine.easeInOut}, "-=1.5")

		}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
