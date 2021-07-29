const textContent = document.querySelector(".book__content");

const setChange = (selector, activate, changeItem) => {
  const menuItem = [...document.querySelector(selector).children];
  return (e) => {
    e.preventDefault();
    reset(activate, menuItem);
    e.target.classList.add(activate);
    changeElemStyle(changeItem, e);
  };
};

const changeElemStyle = (changeItem, e) => {
  const objElemStyle = {
    fontSize: (textContent.style.fontSize = getComputedStyle(e.target).fontSize),
    color: (textContent.style.color = e.target.dataset["textColor"]),
    backgroundColor: (textContent.closest(".book").style.backgroundColor = e.target.dataset["bgColor"]),
  };
  return objElemStyle[changeItem];
};

const reset = (active, menuItem) => {
  menuItem.forEach((elem) => {
    elem.classList.remove(active);
  });
};

let fontSize = setChange(
  ".book__control_font-size",
  "font-size_active",
  "fontSize"
);
let textColor = setChange(".book__control_color", "color_active", "color");

let bgColor = setChange(
  ".book__control_background",
  "color_active",
  "backgroundColor"
);

[...document.querySelector(".book__control_font-size").children].forEach(
  (elem) => elem.addEventListener("click", fontSize)
);
[
  ...document.querySelector(".book__control_color").querySelectorAll(".color"),
].forEach((elem) => elem.addEventListener("click", textColor));
[
  ...document
    .querySelector(".book__control_background")
    .querySelectorAll(".color"),
].forEach((elem) => elem.addEventListener("click", bgColor));
