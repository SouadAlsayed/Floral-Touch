import { sectionScroll, toggleMenu } from "./toggleMenu.js";
import {
  closeForm,
  toggleForm,
  toggleRegForm,
  login,
  register,
  updateUserUI,
} from "./login.js";
import { closeModal } from "./modal.js";

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

//////////////////////////////////////////////////////////

export const renderCart = function (target) {
  // if in modal close it
  if (target.classList.contains("modal-btn")) closeModal();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currUser) return;

  // Find the item card from the clicked element
  const itemCard = target.closest(".item-card");
  if (!itemCard) {
    console.log("Item card not found");
    return;
  }

  // Extract item details
  const item = cardInfo(itemCard);

  // Create a cart item object
  const cartItem = {
    id: Date.now(), // Unique ID for each cart item
    name: item.title,
    price: item.price,
    quantity: 1,
    image: item.img,
  };

  // Add item to the current user's cart
  currUser.cart.push(cartItem);

  // Update the users array with the updated cart for the current user
  users = users.map((user) =>
    user.email === currUser.email ? { ...user, cart: currUser.cart } : user
  );

  // Save updated data back to local storage
  localStorage.setItem("currentUser", JSON.stringify(currUser));
  localStorage.setItem("users", JSON.stringify(users));

  updateCartCount();
};

const updateCartDisplay = function (cart) {
  const cartContainer = document.getElementById("cart-items-list");
  const totals = calculateTotals(cart);

  if (!cartContainer) return;

  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item"> 
        <i class="fa-solid fa-xmark delete-item"></i>
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <div class="quantity">
            <div class="quantity-nums">
              <button class="minus">-</button>
              <span class="quantity-num">${item.quantity}</span>
              <button class="plus">+</button>
            </div> 
            <p class="item-price">$${item.price}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  // Update summary
  document.getElementById("subtotal").textContent = `$${totals.subtotal}`;
  document.getElementById("delivery").textContent = `$${totals.delivery}`;
  document.getElementById("total").textContent = `$${totals.total}`;

  updateCartCount();
};

document.addEventListener("click", function (e) {
  let currUser = JSON.parse(localStorage.getItem("currentUser")) || {
    cart: [],
  };

  // Helper function to get the cart item from the event target
  const getCartItemFromEvent = (target) => {
    const cartItem = target.closest(".cart-item");
    return cartItem ? cartItem.querySelector("h3")?.textContent : null;
  };

  // Remove Item from Cart
  if (e.target.classList.contains("delete-item")) {
    const itemName = getCartItemFromEvent(e.target);
    if (!itemName) return;

    const itemToRemove = currUser.cart.find((item) => item.name === itemName);
    if (itemToRemove) removeItem(itemToRemove.id);
  }

  // Update Quantity (+ or -)
  if (["minus", "plus"].some((cls) => e.target.classList.contains(cls))) {
    const itemName = getCartItemFromEvent(e.target);
    if (!itemName) return;

    const itemToUpdate = currUser.cart.find((item) => item.name === itemName);
    const change = e.target.classList.contains("minus") ? -1 : 1;

    if (itemToUpdate) updateQuantity(itemToUpdate.id, change);
  }
});

// Function to update cart count in the header
const updateCartCount = function () {
  let currUser = JSON.parse(localStorage.getItem("currentUser")) || {
    cart: [],
  };
  const cartCount = currUser.cart.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Sum quantities

  // Select all cart number elements
  const cartNumElements = document.querySelectorAll(".cart-num");
  cartNumElements.forEach((element) => (element.textContent = cartCount));
};

const updateQuantity = function (id, change) {
  let currUser = JSON.parse(localStorage.getItem("currentUser")) || {
    cart: [],
  };
  let item = currUser.cart.find((item) => item.id === id);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(id); // Remove if quantity is zero
    } else {
      localStorage.setItem("currentUser", JSON.stringify(currUser));

      updateCartDisplay(currUser.cart);
    }
  }
};

const calculateTotals = function (cart) {
  let currUser = JSON.parse(localStorage.getItem("currentUser"));
  // If there's no current user, return default values
  if (!currUser) {
    return {
      subtotal: 0,
      delivery: 15,
      total: 0,
    };
  }

  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(" EGP", "")); // Extract numeric price
    return sum + price * item.quantity;
  }, 0);
  const delivery = 15;

  const total = currUser.cart.length === 0 ? 0 : subtotal + delivery;
  return {
    subtotal,
    delivery,
    total,
  };
};

const removeItem = function (id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currUser) return;

  // Remove the item from the current user's cart
  currUser.cart = currUser.cart.filter((item) => item.id !== id);

  // Update the users array with the modified cart for the current user
  users = users.map((user) =>
    user.email === currUser.email ? { ...user, cart: currUser.cart } : user
  );

  // Save updated data back to local storage
  localStorage.setItem("currentUser", JSON.stringify(currUser));
  localStorage.setItem("users", JSON.stringify(users));

  // Update the cart display on the UI
  updateCartDisplay(currUser.cart);
};

const cardInfo = function (itemCard) {
  const img = itemCard.querySelector(".item-img").src;
  const title = itemCard.querySelector(".item-title").textContent;
  const price = itemCard.querySelector(".item-price").textContent;
  console.log(img, title, price);
  return {
    img,
    title,
    price,
  };
};

// Initialize cart display
let currUser = JSON.parse(localStorage.getItem("currentUser")) || {
  cart: [],
};
updateCartDisplay(currUser.cart);
updateCartCount();
