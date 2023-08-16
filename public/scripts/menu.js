const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const menuBtnOpen = document.getElementById("menuBtnOpen");
const menuBtnClose = document.getElementById("menuBtnClose");
menuBtnOpen.classList.add("hello");

let toggleMenu = 0;
menuBtn.addEventListener("click", async () => {
  if (toggleMenu == 0) {
    showMenu();
    toggleMenu = 1;
  } else {
    hideMenu();
    toggleMenu = 0;
  }
});

function showMenu() {
  menuBtnOpen.classList.toggle("block");
  menuBtnOpen.classList.toggle("hidden");

  menuBtnClose.classList.toggle("block");
  menuBtnClose.classList.toggle("hidden");

  menuList.classList.toggle("h-0");
  menuList.classList.toggle("h-auto");
}
function hideMenu() {
  menuBtnOpen.classList.toggle("block");
  menuBtnOpen.classList.toggle("hidden");

  menuBtnClose.classList.toggle("block");
  menuBtnClose.classList.toggle("hidden");

  menuList.classList.toggle("h-0");
  menuList.classList.toggle("h-auto");
}
