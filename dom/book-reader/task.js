const fontSizeText = [...document.querySelector(".book__control_font-size").children];
const textColor = [...document.querySelector(".book__control_color").children];
const backgColor = [...document.querySelector(".book__control_background").children];
const textContent = document.querySelector(".book__content");

const setChange = (selector, activate, changeItem) => {
  const menuItem = [...document.querySelector(selector).children];
  return (e) => {
    e.preventDefault();
    reset(activate, menuItem);
      e.target.classList.add(activate);
         changeElem(changeItem,e)
  };
};

const changeElem = (changeItem, e) => {
    if (changeItem === 'fontSize') { textContent.style.fontSize = getComputedStyle(e.target).fontSize; }
    if (changeItem === "color") { textContent.style.color = e.target.dataset["textColor"]; }
    if (changeItem === "backgroundColor") { textContent.closest(".book").style.backgroundColor =
      e.target.dataset["bgColor"];
    }
    
}
const reset = (active, menuItem) => {
  menuItem.forEach((elem) => {
    elem.classList.remove(active);
  });
};

let font = setChange(".book__control_font-size", "font-size_active", 'fontSize');
let text = setChange(".book__control_color", "color_active", 'color');
let bgColor = setChange(".book__control_background", "color_active", 'backgroundColor');

fontSizeText.forEach((elem) => elem.addEventListener("click", font));
textColor.forEach((elem) => elem.addEventListener("click", text));
backgColor.forEach((elem) => elem.addEventListener("click", bgColor));



