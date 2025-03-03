import { lazyLoad } from "./script.js";

const slider = document.querySelector(".slider");
let autoScrollInterval;

export const scrollNext = function () {
  let card = document.querySelector(".card");
  if (!card) return;

  let cardWidth = card.offsetWidth;
  let gap = 20;
  let scrollStep = cardWidth + gap;
  let maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft + scrollStep >= maxScroll) {
    slider.scrollLeft = maxScroll; // Ensure last item is fully visible
    setTimeout(() => {
      slider.scrollLeft = 0; // Jump to the start after a short delay
    }, 3500); // Delay to Ensure last item is fully visible
  } else {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
  }
};

export const scrollPrev = function () {
  let card = document.querySelector(".card");
  if (!card) return;

  let cardWidth = card.offsetWidth;
  let gap = 20;
  let scrollStep = cardWidth + gap;

  if (slider.scrollLeft <= 0) {
    return;
    // slider.scrollLeft = slider.scrollWidth - slider.clientWidth; // Jump to the last card
  } else {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
  }
};

const startAutoScroll = function () {
  stopAutoScroll(); // Clear existing interval to prevent multiple triggers

  autoScrollInterval = setInterval(() => {
    scrollNext();
  }, 3500);
};

// Stop auto-scroll on user interaction
const stopAutoScroll = function () {
  clearInterval(autoScrollInterval);
};

// Restart auto-scroll after interaction
export const restartAutoScroll = function () {
  stopAutoScroll();
  startAutoScroll();
};
const sliderItems1 = [
  {
    title: "Blossoms of Love",
    price: "3000.00 EGP",
    image: "assets/images/m1.webp",
    highImage: "assets/images/m1-h.webp",
  },
  {
    title: "Eternal Embrace",
    price: "1200.00 EGP",
    image: "assets/images/m2.webp",
    highImage: "assets/images/m2-h.webp",
  },
  {
    title: "Graceful Bloom",
    price: "1500.00 EGP",
    image: "assets/images/m3.webp",
    highImage: "assets/images/m3-h.webp",
  },
  {
    title: "Heartfelt Petals",
    price: "2000.00 EGP",
    image: "assets/images/m4.webp",
    highImage: "assets/images/m4-h.webp",
  },
  {
    title: "Mom’s Radiance",
    price: "1200.00 EGP",
    image: "assets/images/m5.webp",
    highImage: "assets/images/m5-h.webp",
  },
  {
    title: "Cherished Moments",
    price: "1400.00 EGP",
    image: "assets/images/m6.webp",
    highImage: "assets/images/m6-h.webp",
  },
  {
    title: "Golden Love",
    price: "1300.00 EGP",
    image: "assets/images/m7.webp",
    highImage: "assets/images/m7-h.webp",
  },
  {
    title: "Pure Affection",
    price: "2000.00 EGP",
    image: "assets/images/m8.webp",
    highImage: "assets/images/m8-h.webp",
  },
];
const sliderItems2 = [
  {
    title: "Eternal Love",
    price: "1000.00 EGP",
    image: "assets/images/v1.webp",
    highImage: "assets/images/v1-h.webp",
  },
  {
    title: "Passion Bloom",
    price: "1200.00 EGP",
    image: "assets/images/v2.webp",
    highImage: "assets/images/v2-h.webp",
  },
  {
    title: "Sweetheart’s Embrace",
    price: "1500.00 EGP",
    image: "assets/images/v3.webp",
    highImage: "assets/images/v3-h.webp",
  },
  {
    title: "Romance Whisper",
    price: "2000.00 EGP",
    image: "assets/images/v4.webp",
    highImage: "assets/images/v4-h.webp",
  },
  {
    title: "Forever Yours",
    price: "1200.00 EGP",
    image: "assets/images/v5.webp",
    highImage: "assets/images/v5-h.webp",
  },
  {
    title: "Amour Bouquet",
    price: "1400.00 EGP",
    image: "assets/images/v6.webp",
    highImage: "assets/images/v6-h.webp",
  },
  {
    title: "Blush of Love",
    price: "1300.00 EGP",
    image: "assets/images/v7.webp",
    highImage: "assets/images/v7-h.webp",
  },
  {
    title: "Red Roses",
    price: "2000.00 EGP",
    image: "assets/images/v8.webp",
    highImage: "assets/images/v8-h.webp",
  },
];
const sliderItems3 = [
  {
    title: "Eternal Vows",
    price: "1000.00 EGP",
    image: "assets/images/w1.webp",
    highImage: "assets/images/w1-h.webp",
  },
  {
    title: "Pure Elegance",
    price: "1200.00 EGP",
    image: "assets/images/w2.webp",
    highImage: "assets/images/w2-h.webp",
  },
  {
    title: "Forever in Bloom",
    price: "1500.00 EGP",
    image: "assets/images/w3.webp",
    highImage: "assets/images/w3-h.webp",
  },
  {
    title: "Blissful Union",
    price: "2000.00 EGP",
    image: "assets/images/w4.webp",
    highImage: "assets/images/w4-h.webp",
  },
  {
    title: "Whispered Promises",
    price: "1200.00 EGP",
    image: "assets/images/w5.webp",
    highImage: "assets/images/w5-h.webp",
  },
  {
    title: "Golden Ever After",
    price: "1400.00 EGP",
    image: "assets/images/w6.webp",
    highImage: "assets/images/w6-h.webp",
  },
  {
    title: "Enchanted Love",
    price: "1300.00 EGP",
    image: "assets/images/w7.webp",
    highImage: "assets/images/w7-h.webp",
  },
  {
    title: "Cherished Moment",
    price: "2000.00 EGP",
    image: "assets/images/w8.webp",
    highImage: "assets/images/w8-h.webp",
  },
];
const sliderItems4 = [
  {
    title: "Blossom Bliss",
    price: "1000.00 EGP",
    image: "assets/images/b1.webp",
    highImage: "assets/images/b1-h.webp",
  },
  {
    title: "Radiant Wishes",
    price: "1200.00 EGP",
    image: "assets/images/b2.webp",
    highImage: "assets/images/b2-h.webp",
  },
  {
    title: "Bloom & Celebrate",
    price: "1500.00 EGP",
    image: "assets/images/b3.webp",
    highImage: "assets/images/b3-h.webp",
  },
  {
    title: "Sunshine Smiles",
    price: "2000.00 EGP",
    image: "assets/images/b4.webp",
    highImage: "assets/images/b4-h.webp",
  },
  {
    title: "Petal Party",
    price: "1200.00 EGP",
    image: "assets/images/b5.webp",
    highImage: "assets/images/b5-h.webp",
  },
  {
    title: "Floral Festivity",
    price: "1400.00 EGP",
    image: "assets/images/b6.webp",
    highImage: "assets/images/b6-h.webp",
  },
  {
    title: "Joyful Blooms",
    price: "1300.00 EGP",
    image: "assets/images/b7.webp",
    highImage: "assets/images/b7-h.webp",
  },
  {
    title: "Wish Upon a Bloom",
    price: "2000.00 EGP",
    image: "assets/images/b8.webp",
    highImage: "assets/images/b8-h.webp",
  },
];

export const renderOccasion = function (occasion) {
  slider.innerHTML = ""; // Clear existing items
  makeOccasionActive(occasion);

  // Load new occasion items
  if (occasion === "motherDay") {
    generateSliderItems(sliderItems1);
  } else if (occasion === "valentine") {
    generateSliderItems(sliderItems2);
  } else if (occasion === "weddings") {
    generateSliderItems(sliderItems3);
  } else if (occasion === "birthdays") {
    generateSliderItems(sliderItems4);
  }

  // Reset scroll position to the start
  slider.scrollLeft = 0;

  // Restart auto-scroll after a short delay
  setTimeout(() => {
    startAutoScroll();
  }, 500); // Short delay to ensure smooth transition
};
const occasionNames = document.querySelectorAll(".occasions-name li");
const makeOccasionActive = function (occasion) {
  for (let occasionName of occasionNames) {
    if (occasionName.classList.contains(occasion)) {
      occasionName.classList.add("active");
    } else {
      occasionName.classList.remove("active");
    }
  }
};

const generateSliderItems = function (sliderItems) {
  sliderItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("item-card");

    card.innerHTML = `
        <div class="card-img-wrapper">
          <img class="card-img item-img lazy-load" src="${item.image}" data-src="${item.highImage}" alt="${item.title}" />
        </div>
        <div class="card-body">
          <h3 class="card-title item-title">${item.title}</h3>
          <h4 class="card-price item-price">${item.price}</h4>
          <button class="add-to-cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <a class="show-product" href="#"><i class="fa-regular fa-eye"></i></a>
      `;

    slider.appendChild(card);
  });
  // Call lazyLoad after rendering new images
  lazyLoad();
};
