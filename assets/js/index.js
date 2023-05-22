// Toggle Menu

let isOpened = false;
const burgerBtn = document.getElementById("burgerBtn");
const menu = document.querySelector(".menu");

// Function to handle screen size change
function handleScreenSizeChange() {
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth > 600) {
    menu.style.opacity = "1";
  }
}

// Attach an event listener to the window's resize event
window.addEventListener("resize", handleScreenSizeChange);

function toggleMenu() {
  isOpened = !isOpened;
  if (isOpened === true ) {
    menu.style.opacity = "1";
    burgerBtn.classList.add("active");
  } else {
    menu.style.opacity = "0";
    burgerBtn.classList.remove("active");
  }
}

burgerBtn.addEventListener("click", toggleMenu);

// Toggle Menu
