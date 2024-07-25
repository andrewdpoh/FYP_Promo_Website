let text = document.getElementById("headerText");
let hill = document.getElementById("headerHill");
let leaves = document.getElementById("headerLeaves");
let branch = document.getElementById("headerBranch");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // restrict infinite scroll
  if (value > 400) {
    value = 400;
  }

  text.style.marginTop = value * 1 + "px";

  hill.style.right = value * 0.7 + "px";

  leaves.style.top = value * -0.4 + "px";
  leaves.style.left = value * 0.4 + "px";

  branch.style.top = value * -0.5 + "px";
  branch.style.left = value * 0.7 + "px";

  // hide the Bamboo text afterwards
  if (value >= 280) {
    text.style.opacity = 0;
  } else {
    text.style.opacity = 1;
  }
});
