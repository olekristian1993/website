
//Navigasjonsbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}


//View slider
var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var z = document.getElementsByClassName("mineBilder");
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";}
  slideIndex++;
  if (slideIndex > z.length) {slideIndex = 1}
  z[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); }
