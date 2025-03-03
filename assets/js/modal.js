// const overlay = document.querySelector(".overlay");
// const modal = document.querySelector(".flower-modal");

// export const openModal = function (target) {
//   const card = target.closest(".card");
//   if (!card) return;

//   cardInfo(card);
//   renderModal();

//   if (!modal && !overlay) return;
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");

//   // Delay adding the event listener to prevent immediate closing
//   setTimeout(() => {
//     // Add event listener to close form when clicking outside
//     document.addEventListener("click", closeFormOnClickOutside);
//   }, 100);
// };
// export const closeModal = function () {
//   if (!modal && !overlay) return;
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   document.removeEventListener("click", closeFormOnClickOutside);
// };
// // Function to close when clicking outside
// const closeFormOnClickOutside = function (e) {
//   const isClickInsideModal = modal.contains(e.target);
//   const isClickOnTrigger = e.target.closest(".card-img-wrapper, .show-product");

//   // Close only if the click is completely outside the modal & trigger elements
//   if (!isClickInsideModal && !isClickOnTrigger) {
//     closeModal();
//   }
// };
// let img, title, price;
// const renderModal = function () {
//   const modalImg = modal.querySelector(".flower-img");
//   const modalTitle = modal.querySelector(".flower-title");
//   const modalPrice = modal.querySelector(".flower-price");

//   // Reset modal content
//   modalImg.src = "";
//   modalTitle.textContent = "";
//   modalPrice.textContent = "";

//   // Set new modal content
//   modalImg.src = img;
//   modalTitle.textContent = title;
//   modalPrice.textContent = price;
// };
// const cardInfo = function (currCard) {
//   img = currCard.querySelector(".card-img").src;
//   title = currCard.querySelector(".card-title").textContent;
//   price = currCard.querySelector(".card-price").textContent;
//   console.log(img, title, price);
// };
// Selectors
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".flower-modal");

// Variables to store card info
let img, title, price;

// Function to open the modal
export const openModal = function (target) {
  const card = target.closest(".card");
  if (!card) return;

  // Get card info
  cardInfo(card);

  // Show overlay and spinner
  if (!overlay) return;
  overlay.classList.remove("hidden");
  showSpinner();

  // Render modal content after a delay (simulate loading)
  setTimeout(() => {
    renderModal();
  }, 1000); // Simulate a 1-second delay for loading
};

// Function to close the modal
export const closeModal = function () {
  if (!modal && !overlay) return;
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.removeEventListener("click", closeFormOnClickOutside);

  // Reset modal content and spinner
  hideSpinner();
};

// Function to close modal when clicking outside
const closeFormOnClickOutside = function (e) {
  const isClickInsideModal = modal.contains(e.target);
  const isClickOnTrigger = e.target.closest(".card-img-wrapper, .show-product");

  // Close only if the click is completely outside the modal & trigger elements
  if (!isClickInsideModal && !isClickOnTrigger) {
    closeModal();
  }
};

// Function to render modal content
const renderModal = function () {
  const modalImg = modal.querySelector(".flower-img");
  const modalTitle = modal.querySelector(".flower-title");
  const modalPrice = modal.querySelector(".flower-price");

  // Set new modal content
  modalImg.src = img;
  modalTitle.textContent = title;
  modalPrice.textContent = price;

  // Hide spinner and show modal
  hideSpinner();
  modal.classList.remove("hidden");

  // Add event listener to close form when clicking outside
  document.addEventListener("click", closeFormOnClickOutside);
};

// Function to get card info
const cardInfo = function (currCard) {
  img = currCard.querySelector(".card-img").src;
  title = currCard.querySelector(".card-title").textContent;
  price = currCard.querySelector(".card-price").textContent;
  console.log(img, title, price);
};

// Function to show the spinner
const showSpinner = function () {
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.style.display = "block";
  }
};

// Function to hide the spinner
const hideSpinner = function () {
  const spinner = document.querySelector(".spinner");
  if (spinner) {
    spinner.style.display = "none";
  }
};
