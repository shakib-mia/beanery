import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

document
  .querySelectorAll("button")
  .forEach((item) =>
    item.addEventListener("click", (e) => console.log(e.target)),
  );

// nav tab section
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all links and contents
      tabLinks.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked link and corresponding content
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".slider-button-next",
  //   prevEl: ".slider-button-prev",
  // },
  slidesPerView: 1,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //   },
  //   1024: {
  //     slidesPerView: 1,
  //   },
  // },
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
