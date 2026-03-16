const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
});
