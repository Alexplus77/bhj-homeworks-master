const menu_sub = document.querySelector(".menu_sub");
const menu = document.querySelector(".menu__item").parentElement
const link = document.querySelector("a");


console.log();
//console.log(menu);
const menuItem = (event) => { 
    
    console.log(event.target.classList);
  if (event.target.classList.contains("menu__link")) {
    
    menu_sub.className = "menu_active";
    }
   if (event.target.tagName === 'A') {
        event.preventDefault();      
    } 
};


menu.addEventListener("click", menuItem);
