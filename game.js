// Minimal test script: proves that JavaScript runs on GitHub Pages.
// The real game engine will replace this later.

let sol = 1;

const solLabel = document.getElementById("sol");
const nextButton = document.getElementById("next-sol");

nextButton.addEventListener("click", function () {
  sol += 1;
  solLabel.textContent = sol;
  console.log("Moved to sol " + sol);
});
