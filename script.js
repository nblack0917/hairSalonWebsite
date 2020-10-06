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

let imgSrc = "";

const setImgDetail = (element) => {
      document.getElementById("gallery-container").style.display = "none";
      document.getElementById("detail-container").style.display = "flex";
      imgSrc = element.src
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          }); 
      document.getElementById("image-detail").src = imgSrc;
}

const closeImgDetail = () => {
      document.getElementById("gallery-container").style.display = "flex";
      document.getElementById("detail-container").style.display = "none";
      document.getElementById("image-detail").style.filter = "grayscale(100)";
}

const addColor = () => {
      document.getElementById("image-detail").style.filter = "none";
}