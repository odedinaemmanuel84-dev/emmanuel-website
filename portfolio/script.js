// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
