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

const addColor = () => {
      document.getElementById("image-detail").style.filter = "none";
}

const changeBackground = () => {
      document.getElementById("form-body").style.backgroundImage = "linear-gradient(to left, rgba(182, 55, 0,.6), rgba(255, 255, 255, 0)), url(./background-shop-thin.jpg)"
}

function changeDoor() {
      console.log("click")
      let x = Math.floor(Math.random() * 5) + 1
      let a = document.getElementById("orange-door");
      let b = document.getElementById("yellow-door");
      let c = document.getElementById("blue-door");
      let d = document.getElementById("green-door");
      let e = document.getElementById("pink-door");
      document.getElementById("main-image").style.backgroundImage = "url(./images/main-img-bw.jpg)"
      switch (x) {
            case 1:
                  a.style.display = "block";
                  b.style.display = "none";
                  c.style.display = "none";
                  d.style.display = "none";
                  e.style.display = "none";
                  break;
            case 2:
                  a.style.display = "none";
                  b.style.display = "block";
                  c.style.display = "none";
                  d.style.display = "none";
                  e.style.display = "none";
                  break;
            case 3:
                  a.style.display = "none";
                  b.style.display = "none";
                  c.style.display = "block";
                  d.style.display = "none";
                  e.style.display = "none";
                  break;
            case 4:
                  a.style.display = "none";
                  b.style.display = "none";
                  c.style.display = "none";
                  d.style.display = "block";
                  e.style.display = "none";
                  break;
            case 5:
                  a.style.display = "none";
                  b.style.display = "none";
                  c.style.display = "none";
                  d.style.display = "none";
                  e.style.display = "block";
                  break;
      }
}

const turnOrange = () => {
      let bars = document.getElementsByClassName("header-bars");
      for(var i = 0; i < bars.length; i++){
		bars[i].style.backgroundColor = "#b63700 ";
	}
}

const flipSis = () => {
      let sis = document.getElementById("scissors");
      sis.src = "../images/sdb_logo_black_flipped.svg"
}
// Image Gallery functions

let imgSrc = "";

// const setImgDetail = (element) => {
//       document.getElementById("gallery-container").style.display = "none";
//       document.getElementById("detail-container").style.display = "flex";
//       imgSrc = element.src
//       document.getElementById("logo").style.height = "100px"
//       window.scroll({
//             top: 0,
//             left: 0,
//             behavior: 'smooth'
//           }); 
//       document.getElementById("image-detail").src = imgSrc;
// }

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

