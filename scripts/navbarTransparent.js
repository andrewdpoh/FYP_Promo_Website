// make navbar disappear and reappear on scroll AND make navbar transparent/black after passing scrollY 200 (need the background-color css in main.css also)
// 
var prevScrollpos = window.scrollY;
var navButton = document.getElementsByClassName("navButton");
var navButtonArr = Array.from(navButton);
var nav = document.getElementsByTagName("nav")[0];

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0rem";
  } else {
    nav.style.top = "-4.4rem";
  }
  prevScrollpos = currentScrollPos;

	if (currentScrollPos >= 350) {
    nav.style["background-color"] = "black";
    navButtonArr.forEach((button) => {
      button.style.color = "white";
    });
  } else {
    nav.style["background-color"] = "rgba(255,255,255,0)";
    navButtonArr.forEach((button) => {
      button.style.color = "black";
    });
  }
};
