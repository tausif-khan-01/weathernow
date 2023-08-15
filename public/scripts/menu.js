const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");
const menuBtnOpen = document.getElementById("menuBtnOpen");
const menuBtnClose = document.getElementById("menuBtnClose");
menuBtnOpen.classList.add("hello");



var toggleMenu = 0;
menuBtn.addEventListener("click", async () => {
  if (toggleMenu == 0) {
    menuBtnOpen.classList.toggle("block");
    menuBtnOpen.classList.toggle("hidden");

    menuBtnClose.classList.toggle("block");
    menuBtnClose.classList.toggle("hidden");

    menuList.classList.toggle("h-0");
    menuList.classList.toggle("h-auto");

    toggleMenu = 1;
  } else {
    menuBtnOpen.classList.toggle("block");
    menuBtnOpen.classList.toggle("hidden");

    menuBtnClose.classList.toggle("block");
    menuBtnClose.classList.toggle("hidden");

    menuList.classList.toggle("h-0");
    menuList.classList.toggle("h-auto");

    toggleMenu = 0;
  }
});
