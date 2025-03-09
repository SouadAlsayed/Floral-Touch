import { sectionScroll, toggleMenu } from "./toggleMenu.js";
import {
  closeForm,
  toggleForm,
  toggleRegForm,
  login,
  register,
  updateUserUI,
} from "./login.js";
import { dropdownToggle, closeDropdown, updateSort } from "./sort.js";
import { openModal, closeModal } from "./modal.js";
import {
  scrollPrev,
  scrollNext,
  restartAutoScroll,
  renderOccasion,
} from "./slider.js";
import { renderCart, updateCartDisplay, updateCartCount } from "./cart.js";
/////////////////////////////////////////////////////////////////

// Lazy Loadig
export const lazyLoad = function () {
  const images = document.querySelectorAll(".lazy-load");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src; // Swap to high-quality image

        img.classList.remove("lazy-load");
        observer.unobserve(img); // Stop observing
      }
    });
  });
  images.forEach((img) => observer.observe(img));
};
lazyLoad();
// Menu
const menu = document.querySelector(".menu");
const exitMenuIcon = document.querySelector(".exit-menu");

menu.addEventListener("click", toggleMenu);
exitMenuIcon.addEventListener("click", toggleMenu);

// Smooth Scrolling
document.querySelector(".nav-items").addEventListener("click", function (e) {
  sectionScroll(e);
});

/////////////////////////////////////////////////////////////////

// login Modal
const loginIcon = document.querySelector(".fa-user");
const loginOverlay = document.querySelector(".login-overlay");

loginIcon.addEventListener("click", toggleForm);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !loginOverlay.classList.contains("hidden")) {
    closeForm();
  }
});
/////////////////////////////////////////////////////////////////

// Register Modal
const toRegForm = document.querySelector("#to-register-form");
const regBtn = document.querySelector("#register-btn");
const lgBtn = document.querySelector("#login-btn");

toRegForm.addEventListener("click", toggleRegForm);

lgBtn.addEventListener("click", login);
regBtn.addEventListener("click", register);

document.addEventListener("DOMContentLoaded", updateUserUI);

const clearLoginUsers = function () {
  localStorage.clear("users");
};
// clearLoginUsers();
/////////////////////////////////////////////////////////////////

// Dropdown Menu to SORT
const dropdown = document.querySelector(".sort-dropdown");
const dropdownBtn = dropdown.querySelector(".dropdown-btn");
const options = dropdown.querySelectorAll(".dropdown-menu li");
const products = document.querySelector(".product");

dropdownBtn.addEventListener("click", dropdownToggle);

// Update dropdownBtn text and apply sorting
options.forEach((option) => {
  option.addEventListener("click", function () {
    updateSort(option); // Pass the clicked element explicitly
  });
});
document.addEventListener("click", closeDropdown);

/////////////////////////////////////////////////////////////////

// Occasion Slider
const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

next.addEventListener("click", () => {
  scrollNext();
  restartAutoScroll();
});
prev.addEventListener("click", () => {
  scrollPrev();
  restartAutoScroll();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    scrollNext();
    restartAutoScroll();
  }
  if (e.key === "ArrowLeft") {
    scrollPrev();
    restartAutoScroll();
  }
});

// Render Occasions
const motherDay = document.querySelector(".motherDay");
const valentine = document.querySelector(".valentine");
const weddings = document.querySelector(".weddings");
const birthdays = document.querySelector(".birthdays");

renderOccasion("motherDay");
motherDay.addEventListener("click", function () {
  renderOccasion("motherDay");
});
valentine.addEventListener("click", function () {
  renderOccasion("valentine");
});
weddings.addEventListener("click", function () {
  renderOccasion("weddings");
});
birthdays.addEventListener("click", function () {
  renderOccasion("birthdays");
});
/////////////////////////////////////////////////////////////////

// Modal
const exitIcon = document.querySelector(".exit-icon");

slider.addEventListener("click", function (e) {
  const target = e.target.closest(".card-img-wrapper, .show-product"); // Check if clicked on either

  if (target) {
    e.preventDefault();
    console.log("Clicked:", target);
    openModal(target);
  }
});
products.addEventListener("click", function (e) {
  const target = e.target.closest(".card-img-wrapper, .show-product"); // Check if clicked on either

  if (target) {
    e.preventDefault();
    console.log("Clicked:", target);
    openModal(target);
  }
});
exitIcon.addEventListener("click", closeModal);
////////////////////////////

// Add To Cart
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach((addToCartBtn) => {
  addToCartBtn.addEventListener("click", function (e) {
    const target = e.target;
    console.log(target);
    renderCart(target);
  });
});
