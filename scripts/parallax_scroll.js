let text = document.getElementById("headerText");
let hill = document.getElementById("headerHill");
let leaves = document.getElementById("headerLeaves");
let branch = document.getElementById("headerBranch");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // restrict infinite scroll
  if (value > 700) {
    value = 700;
  }

  text.style.marginTop = value * 1 + "px";

  hill.style.left = value * -0.8 + "px";

  leaves.style.top = value * -0.4 + "px";
  leaves.style.right = value * -0.5 + "px";

  branch.style.top = value * -0.5 + "px";
  branch.style.right = value * -0.7 + "px";
});
