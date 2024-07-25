// make navbar disappear and reappear on scroll
var prevScrollpos = window.scrollY;
var nav = document.getElementsByTagName("nav")[0];

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0rem";
  } else {
    nav.style.top = "-4.4rem";
  }
  prevScrollpos = currentScrollPos;
};
