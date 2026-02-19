// JS scripts placed here
const btn = document.querySelector("#theme-btn");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});
 