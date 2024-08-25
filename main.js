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
  autoplay: {
    delay: 2000,
  },
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

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(currentScrollY);
    if (scrollDirection === "up") {
      document.getElementById("navbar-container").style.top = "0";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
      //   document
      //     .getElementById("navbar-container")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      document.getElementById("navbar-container").style.top = "-7rem";
      document.getElementById("navbar-container").style.transition =
        "all 0.5s ease";
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar-container").style.boxShadow =
        "0 0 20px 0 #2B245D21";

      document.getElementById("navbar-container").style.backgroundColor =
        "#ffffff";
    } else {
      document.getElementById("navbar-container").style.boxShadow = "none";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
