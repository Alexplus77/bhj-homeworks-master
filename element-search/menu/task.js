const menuMain = document.querySelector(".menu_main");
const [...menuSub] = document.querySelectorAll(".menu_sub");

function displaySubMenu(event) {
  menuSub.forEach((elem) => {
    if (elem.classList.contains("menu_active")) {
      elem.classList.remove("menu_active");
    }
  });
  if (event.target.nextElementSibling.classList.contains("menu_sub")) {
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle("menu_active");
  }
}

function hideSubMenu(event) {
  if (event.target.closest(".menu__item")) {
    return;
  } else {
    menuSub.forEach((elem) => {
      elem.classList.remove("menu_active");
    });
  }
}
menuMain.addEventListener("click", displaySubMenu);
document.addEventListener("click", hideSubMenu);
