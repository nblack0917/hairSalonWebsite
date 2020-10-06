var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
    
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // document.getElementsByClassName('nav-links').style.vibility = "visible"
        document.getElementById('navbar').classList.remove("scroll-down");
        document.getElementById('nav-links').style.visibility = "visible";
  } else {
        document.getElementById('navbar').classList.add("scroll-down");
        document.getElementById('nav-links').style.visibility = "hidden";
        
    }
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});