const loginOverlay = document.querySelector(".login-overlay");
const loginForm = document.querySelector(".login-form");
const formName = document.querySelector(".form-name");
const lgUserName = document.querySelector(".lg-user-name");
const lgEmail = document.querySelector(".lg-email");
const lgPassword = document.querySelector(".lg-password");
const regBtn = document.querySelector("#register-btn");
const lgBtn = document.querySelector("#login-btn");
const toRegForm = document.querySelector("#to-register-form");

export const toggleForm = function () {
  loginOverlay.classList.toggle("hidden");

  // Close the form when clicking outside it
  document.addEventListener("click", function (e) {
    if (!loginForm.contains(e.target) && !e.target.closest(".fa-user")) {
      closeForm();
    }
  });
};
export const toggleRegForm = function () {
  renderForm("Register Form");
  regBtn.classList.remove("hidden");
  lgBtn.classList.add("hidden");
  toRegForm.classList.add("hidden");
};

// Retrieve existing users or initialize an empty array
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

const loginIN = document.querySelectorAll(".login-i-n");

export const register = function () {
  // Check if the user already exists
  const existingUser = users.find((u) => u.email === lgEmail.value);
  if (existingUser) {
    alert("User already exists! Try logging in.");
    return;
  }

  const user = {
    userName: lgUserName.value,
    email: lgEmail.value,
    password: lgPassword.value,
    cart: [],
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Set current user
  localStorage.setItem("currentUser", JSON.stringify(user));
  updateUserUI();
  closeForm();
};

export const login = function () {
  // Get latest users list
  users = JSON.parse(localStorage.getItem("users")) || [];
  console.log("Login : ", users);
  const user = {
    userName: lgUserName.value,
    email: lgEmail.value,
    password: lgPassword.value,
    cart: [],
  };

  // First User
  if (!users) {
    toggleRegForm();
    return;
  }

  const userFound = users.find((u) => {
    return u.email === lgEmail.value;
  });

  // User Not Found need to register
  if (!userFound) {
    alert("User not found! Please register first.");
    toggleRegForm();
    return;
  }
  // Store the logged-in user
  localStorage.setItem("currentUser", JSON.stringify(user));
  updateUserUI();
  closeForm();
};

export const closeForm = function () {
  loginOverlay.classList.add("hidden");
  clearFields();
  renderForm("Login Form");
  regBtn.classList.add("hidden");
  lgBtn.classList.remove("hidden");
  toRegForm.classList.remove("hidden");
};

// Function to update UI with logged-in user
export const updateUserUI = function () {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    loginIN.forEach((el) => {
      el.innerHTML = `<a href="#">${currentUser.userName}</a>`;
      el.style.cursor = "pointer";
    });

    // Logout functionality
    loginIN.forEach((el) => {
      el.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        location.reload();
      });
    });
  }
};
const renderForm = function (formType) {
  formName.textContent = "";
  formName.textContent = formType;
};
const clearFields = function () {
  lgUserName.value = "";
  lgEmail.value = "";
  lgPassword.value = "";
};
