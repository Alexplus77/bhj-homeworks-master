const menu_sub = document.querySelector(".menu_sub");
const menu = document.querySelector(".menu_main");

let link = document.querySelectorAll("a");
console.log(menu);
const menuItem = (event) => {
  console.log((link = false));
  console.log(event.target);
  if (event.target.classList.contains("menu__item")) {
    
    menu_sub.className = "menu_active";
  }
};

menu.addEventListener("click", menuItem);
