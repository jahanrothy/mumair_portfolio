// menu
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const menuCloseBtn = document.getElementById("menu-close-btn");

//menu button handle
menuIcon.addEventListener("click", () => {
  menu.style.display = "block";
  menuIcon.style.display = "none";
  menuCloseBtn.style.display = "block";
});
menuCloseBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuCloseBtn.style.display = "none";
  menuIcon.style.display = "block";
});

// on window resize
function handleWindowSizeChange() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1024) {
    menu.style.display = "block";

    menuCloseBtn.style.display = "none";
    menuIcon.style.display = "none";
  } else {
    menuIcon.style.display = "block";
    menu.style.display = "none";
  }
}

// on window resize
window.addEventListener("resize", handleWindowSizeChange);

handleWindowSizeChange();

// Testimonial slider
let slide = new Swiper(".slide", {
  slidesPerView: 1, // Default to 1 slide per view
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
});
