// NAV
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}

// document.addEventListener('touchstart', onTouchStart, {passive: true});

document.addEventListener("touchstart", function(e) {
	console.log(e.defaultPrevented);  // will be false
	e.preventDefault();   // does nothing since the listener is passive
	console.log(e.defaultPrevented);  // still false
}, Modernizr.passiveeventlisteners ? {passive: true} : false);