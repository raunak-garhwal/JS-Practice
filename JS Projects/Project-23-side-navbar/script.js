const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const sideNavigation = document.getElementById("side-nav");
const content = document.querySelector(".content");

const navLinks = document.querySelectorAll("#nav-links li");

hamburgerIcon.addEventListener("click", function () {
  sideNavigation.classList.toggle("show");
  content.classList.toggle("compressed-width");
});

closeIcon.addEventListener("click", function () {
  sideNavigation.classList.remove("show");
  content.classList.remove("compressed-width");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
