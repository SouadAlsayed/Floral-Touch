import { lazyLoad } from "./script.js";

const dropdown = document.querySelector(".sort-dropdown");
const dropdownBtn = dropdown.querySelector(".dropdown-btn");
const options = dropdown.querySelectorAll(".dropdown-menu li");
const products = document.querySelector(".product.cards");

export const dropdownToggle = function () {
  dropdown.classList.toggle("active");
};
// Close dropdown when clicking outside
export const closeDropdown = function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
};
// Update dropdownBtn text and apply sorting
export const updateSort = function (option) {
  const selectedValue = option.dataset.value;

  // Update dropdownBtn text
  dropdownBtn.textContent = option.textContent;

  // Remove previous selection and highlight the new one
  options.forEach((opt) => opt.classList.remove("selected"));
  option.classList.add("selected");

  // Apply sorting logic
  sortCards(selectedValue);

  // Close the dropdown
  dropdown.classList.remove("active");
};
const sortCards = function (order) {
  const cards = Array.from(products.querySelectorAll(".card"));

  if (order !== "latest") {
    cards.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector(".card-price").textContent.replace("EGP", "").trim()
      );
      const priceB = parseFloat(
        b.querySelector(".card-price").textContent.replace("EGP", "").trim()
      );

      return order === "price-low-high" ? priceA - priceB : priceB - priceA;
    });
    // Clear and re-add sorted cards
    products.innerHTML = "";
    cards.forEach((card) => products.appendChild(card));
  } else {
    const html = `
    <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f1-h.webp"
                src="assets/images/f1.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Parrot Tulips</h3>
              <h4 class="card-price item-price">1000.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f2-h.webp"
                src="assets/images/f2.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Tulips</h3>
              <h4 class="card-price item-price">1200.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f3-h.webp"
                src="assets/images/f3.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Peonies</h3>
              <h4 class="card-price item-price">1500.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f4-h.webp"
                src="assets/images/f4.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Roses & Wildflowers</h3>
              <h4 class="card-price item-price">2000.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f5-h.webp"
                src="assets/images/f5.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Red Tulips</h3>
              <h4 class="card-price item-price">1200.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f6-h.webp"
                src="assets/images/f6.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Purple Tulips</h3>
              <h4 class="card-price item-price">1400.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f7-h.webp"
                src="assets/images/f7.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Yellow Tulips</h3>
              <h4 class="card-price item-price">1300.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>

          <div class="card item-card">
            <div class="card-img-wrapper">
              <img
                class="card-img item-img lazy-load"
                data-src="assets/images/f8-h.webp"
                src="assets/images/f8.webp"
                alt=""
              />
            </div>
            <div class="card-body">
              <h3 class="card-title item-title">Red Roses</h3>
              <h4 class="card-price item-price">2000.00 EGP</h4>
              <button class="add-to-cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <a class="show-product" href="#"
              ><i class="fa-regular fa-eye"></i
            ></a>
          </div>
  `;
    products.innerHTML = "";
    products.insertAdjacentHTML("afterbegin", html);
  }
  lazyLoad();
};
