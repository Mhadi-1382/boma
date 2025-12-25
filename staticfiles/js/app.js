// ====== Splash Screen
const splashContainer = document.getElementById("splashContainer");
window.addEventListener("load", () => {
  setTimeout(() => {
    splashContainer.classList.add("splash-container-toggle");
  }, 2000);
});

// ===== Navbar Items
const navbarItems = document.getElementById("navbarItems");
const navbarBtn = document.getElementById("navbarBtn");
function navbarToggle() {
  navbarItems.classList.toggle("navbar-display-toggle");
}

// ===== Data Share
function dataShareFunc(title, text, url) {
  const dataShare = {
    title: title,
    text: text,
    url: url,
  };
  if (navigator.canShare && navigator.canShare(dataShare)) {
    navigator.share(dataShare);
  } else {
  }
}

// ===== Disable Right Click And Drag & Drop
oncontextmenu = function () {
  return false;
};
document.querySelector("img").draggable = false;
document.querySelector("a img").draggable = false;
document.querySelector("a").draggable = false;
