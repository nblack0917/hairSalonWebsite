function myFunction() {
      var x = document.getElementById("nav-links");
      var y = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " responsive";
      } else {
        x.className = "topnav";
        y.className = "navbar";
      }
    }

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

// Easter Egg Function

function beaconLight() {
      let x = document.getElementById("beacon");
      if (x.style.display == "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
      }
}

// Image Gallery functions

let imgSrc = "";

const setImgDetail = (element) => {
      document.getElementById("gallery-container").style.display = "none";
      document.getElementById("detail-container").style.display = "flex";
      imgSrc = element.src
      document.getElementById("logo").style.height = "100px"
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
      document.getElementById("logo").style.height = "250px"
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          }); 
}

const addColor = () => {
      document.getElementById("image-detail").style.filter = "none";
}