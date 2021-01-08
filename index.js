/*function init() {
  var vidDefer = document.getElementsByTagName('iframe');
    if(vidDefer.getAttribute('data-src')) {
      vidDefer.setAttribute('src',vidDefer.getAttribute('data-src'));
		} 
	} 
window.onload = init;*/

// NAV
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}
