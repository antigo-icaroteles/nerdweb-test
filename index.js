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

const openMenuButton = document.getElementById("btnOpenMenu");
const closeMenuButton = document.getElementById("btnCloseMenu");
const dropdownButton = document.getElementById("btnDropdown");

const openMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.remove("menu__hidden");
};

const closeMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.add("menu__hidden");
};

const openDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("dropdown__hidden");
};
const closeDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.add("dropdown__hidden");
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
dropdownButton.addEventListener("mouseover", openDropdown);
dropdownButton.addEventListener("mouseout", closeDropdown);
