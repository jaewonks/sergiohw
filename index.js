// NAV
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}

function init() {
  var vidDefer = document.getElementsByTagName('iframe');
    if(vidDefer.getAttribute('data-src')) {
      vidDefer.setAttribute('src',vidDefer[i].getAttribute('data-src'));
		} 
	} 
window.onload = init;