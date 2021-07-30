const textContent = document.querySelector(".book__content");

const setChange = (selector, activate, changeItem) => {
    const menuItem = [...document.querySelectorAll(selector)];
    
  return (e) => {
    e.preventDefault();
    reset(activate, menuItem);
    e.target.classList.add(activate);
      changeElemStyle(changeItem, e);
      
  };
};

const changeElemStyle = (changeItem, e) => {
    if (changeItem === "fontSize") {
        textContent.style.fontSize = getComputedStyle(e.target).fontSize;
    }
    if (changeItem === "color") {
        textContent.style.color = e.target.dataset["textColor"];
    }
    if (changeItem === "backgroundColor") {
        textContent.closest(".book").style.backgroundColor =
            e.target.dataset["bgColor"];
    }
}
const reset = (active, menuItem) => {
  menuItem.forEach((elem) => {
    elem.classList.remove(active);
  });
};

let fontSize = setChange(
  ".font-size",
  "font-size_active",
  "fontSize"
);
let textColor = setChange(".color", "color_active", "color");

let bgColor = setChange(
  ".color",
  "color_active",
  "backgroundColor"
);

[...document.querySelectorAll(".font-size")].forEach((elem) =>
  elem.addEventListener("click", fontSize)
);
[...document.querySelectorAll(".color")].forEach((elem) =>
  elem.addEventListener("click", textColor)
);
[...document.querySelectorAll(".color")].forEach((elem) =>
  elem.addEventListener("click", bgColor)
);



// const objElemStyle = {
//   fontSize: (textContent.style.fontSize = getComputedStyle(e.target).fontSize),
//   color: (textContent.style.color = e.target.dataset["textColor"]),
//   backgroundColor: (textContent.closest(".book").style.backgroundColor =
//     e.target.dataset["bgColor"]),
// };
// return objElemStyle[changeItem];