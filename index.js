const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,

  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1320: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: ".carousell--navigation__next",
    prevEl: ".carousell--navigation__prev",
  },
});
