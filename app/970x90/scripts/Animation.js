var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var img2 = document.getElementById('img2');
	var logo = document.getElementById('logo');
	var txt2 = document.getElementById('txt2');
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
		
		tl.to(img2, 0.5, {opacity:1, ease:Sine.easeInOut})
		.to(logo, 0.5, {opacity:1, ease:Sine.easeInOut}, "-=0.5")
		.to(txt1, 0.5, {opacity:1, ease:Sine.easeInOut}, "-=0.5")
		.to(txt2, 0.5, {opacity:1, ease:Sine.easeInOut}, "+=2");
		
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
