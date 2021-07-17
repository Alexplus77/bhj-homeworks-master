const menuMain = document.querySelector(".menu_main");
const [...menuSub] = document.querySelectorAll(".menu_sub");

function displaySubMenu(event) {
  if (event.target.nextElementSibling.classList.contains("menu_sub")) {
    event.preventDefault();
    menuSub.forEach((elem) => {
      if (elem === event.target.nextElementSibling) {
        return;
      }
      elem.classList.remove("menu_active");
    });
    event.target.nextElementSibling.classList.toggle("menu_active");
  }
}

function hideSubMenu(event) {
  if (!event.target.closest(".menu__item")) {
    menuSub.forEach((elem) => {
      elem.classList.remove("menu_active");
    });
  }
}

menuMain.addEventListener("click", displaySubMenu);
document.addEventListener("click", hideSubMenu);
