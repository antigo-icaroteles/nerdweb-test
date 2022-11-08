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
  menu.classList.remove("hidden");
};

const closeMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.add("hidden");
};

const openDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  const iconDropdown = document.getElementById("iconDropdown");
  iconDropdown.classList.remove("fa-caret-down");
  iconDropdown.classList.add("fa-caret-up");
  dropdown.classList.remove("hidden");
};
const closeDropdown = () => {
  const dropdown = document.getElementById("dropdown");
  const iconDropdown = document.getElementById("iconDropdown");
  iconDropdown.classList.remove("fa-caret-up");
  iconDropdown.classList.add("fa-caret-down");
  dropdown.classList.add("hidden");
};

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
dropdownButton.addEventListener("mouseover", openDropdown);
dropdownButton.addEventListener("mouseout", closeDropdown);
