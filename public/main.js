let navButton = document.getElementById("nav-toggle");
let navCloseButton = document.getElementById("nav-toggle-close");
let navMenu = document.getElementById("nav-menu");

navButton.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  navButton.classList.add("hidden");
});

navCloseButton.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  navButton.classList.remove("hidden");
});
