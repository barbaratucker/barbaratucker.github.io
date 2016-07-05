var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}


var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function currentDiv1(n) {
  showDivs1(slideIndex1 = n);
}

function showDivs1(n) {
  var j;
  var y = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("farm");
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (j = 0; j < y.length; j++) {
     y[j].style.display = "none";
  }
  for (j = 0; j < dots1.length; j++) {
     dots1[j].className = dots1[j].className.replace(" w3-border-red", "");
  }
  y[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " w3-border-red";
}


// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "block";
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" w3-border-red", "");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " w3-border-red";
// }