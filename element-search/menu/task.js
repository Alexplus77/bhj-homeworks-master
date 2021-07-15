const menu_subParent = document.querySelector(".menu_sub").parentElement
const menu_sub = document.querySelector(".menu_sub")
const menu_subItem = menu_sub.querySelector('.menu__item')
const menuItemParent = document.querySelector(".menu__item").parentElement;
const link = document.querySelector("a");

//console.log(menu_subItem);
console.log(menuItemParent);
const menuItem = (event) => {
  console.log(event.target);  
     
        if (menu_sub.className !== "menu_active") {
    if (event.target.classList.contains("menu__link")) {
      menu_sub.className = "menu_active";
            }
            
       } else {
    menu_sub.className = "menu_sub";
    }
    if (event.target.tagName === "A") {
       event.preventDefault();
    }  
  
};
menuItemParent.addEventListener("click", menuItem);




