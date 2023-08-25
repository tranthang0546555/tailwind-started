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

let darkBtn = document.getElementById("dark-btn");
let lightIcon = document.getElementById("light-icon");
let darkIcon = document.getElementById("dark-icon");
let classList = document.documentElement.classList;

const setTheme = (theme) => {
  if (theme === "dark") {
    classList.remove("dark");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  } else {
    classList.add("dark");
    lightIcon.classList.remove("hidden");
    darkIcon.classList.add("hidden");
  }
};

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
} else setTheme("light");

darkBtn.addEventListener("click", () => {
  setTheme(classList.contains("dark") ? "dark" : "light");
});
