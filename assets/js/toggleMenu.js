import { closeForm } from "./login.js";

const nav = document.querySelector(".nav");
const navItems = document.querySelector(".nav-items");
const hiddenLists = document.querySelectorAll(".hidden-li");
const icons = document.querySelector(".icons");
const menuLoginLi = document.querySelector(".menu-login");
const loginOverlay = document.querySelector(".login-overlay");
const loginForm = document.querySelector(".login-form");
const menu = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");

// Toggle Menu Function
export const toggleMenu = function () {
  const isMenuOpen = nav.classList.contains("show-menu");

  // Toggle menu classes
  nav.classList.toggle("show-menu");
  nav.classList.toggle("hide-menu");
  navItems.classList.toggle("show-menu");
  menuOverlay.classList.toggle("hidden");
  hiddenLists.forEach((li) => li.classList.toggle("hidden"));
  icons.classList.toggle("hidden");

  // Add or remove event listeners based on menu state
  if (!isMenuOpen) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      menuLoginLi.addEventListener("click", openForm);
    }
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    menuLoginLi.removeEventListener("click", openForm);
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
};

// Open Login Form
const openForm = function (e) {
  e.stopPropagation(); // Prevent immediate closing
  loginOverlay.classList.remove("hidden");

  // Close menu if it's open
  if (nav.classList.contains("show-menu")) {
    toggleMenu();
  }

  // Add event listener to close form when clicking outside
  document.addEventListener("click", closeFormOnClickOutside);
};

// Close Login Form When Clicking Outside
const closeFormOnClickOutside = function (e) {
  if (!loginForm.contains(e.target) && !menuLoginLi.contains(e.target)) {
    loginOverlay.classList.add("hidden");
    closeForm();
    document.removeEventListener("click", closeFormOnClickOutside);
  }
};

// Close Menu When Clicking Outside
const closeMenuOnClickOutside = function (e) {
  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    toggleMenu();
  }
};
// Smooth Scrolling
export const sectionScroll = function (e) {
  e.preventDefault();

  const isMenuOpen = nav.classList.contains("show-menu");

  if (isMenuOpen) {
    toggleMenu();
  }

  if (e.target.classList.contains("nav-item", "footer-link")) {
    const id = e.target.getAttribute("href");

    // Check if we are already on the main page
    if (
      window.location.pathname !== "/index.html" &&
      window.location.pathname !== "/"
    ) {
      // Redirect to the main page with the section ID
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      window.location.href = `/index.html${id}`;
    } else {
      // If already on the main page, smoothly scroll to the section
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }
};
