const menu_subParent = document.querySelector(".menu_sub").parentElement
const menu_sub = document.querySelector(".menu .menu_sub")
const menu_subItem = menu_sub.querySelector('.menu__item')
const menuItemParent = document.querySelector(".menu");
const link = document.querySelector("a");

//console.log(menu_subItem);
console.log(link);
const menuItem = (event) => {
       
        
    if (event.target.classList.contains("menu__link") && !menu_sub.className.includes("menu_active")) {
        event.target.parentElement.querySelector(".menu_sub").className = "menu menu_sub menu_active"  
      //menu_sub.className = "menu menu_sub menu_active";
            }            
        else {
        menu_sub.className = "menu menu_sub";
        
    }
    if (event.target.tagName === "A") {
       event.preventDefault();
    }  
  
};
menuItemParent.addEventListener("click", menuItem);




