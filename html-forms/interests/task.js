const findNodeAll = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];
const findNodeOne = (selector, parent = document) =>
  parent.querySelector(selector);
const interestsItem = findNodeAll(".interests");

const childrenCheck = (children, parents) => {
  children.forEach((child) => {
    child.addEventListener("change", () => {
      if (children.every((elem) => elem.checked)) {
        findNodeOne("input", parents).indeterminate = false;
        findNodeOne("input", parents).checked = true;
      } else {
        findNodeOne("input", parents).indeterminate = true;
        findNodeOne("input", parents).checked = false;
      }
    });
  });
};

parentsCheck = (children, parents) => {
  parents.addEventListener("change", (e) => {
    e.target.checked
      ? children.forEach((elem) => (elem.checked = true))
      : children.forEach((elem) => (elem.checked = false));
  });
};

interestsItem.forEach((el) => {
  if (el.classList.contains("interests_active")) {
    const parents = el.parentNode.firstElementChild;
    const children = findNodeAll("input", el);
    childrenCheck(children, parents);
    parentsCheck(children, parents);
  }
});

//! Разминка

const makeCamelCase = (str) => {
  const arrStr = str.split("-");
  let firstLeter = "";
  const camelCaseStr = arrStr.map((elem, i) => {
      const arrLetter = elem.split("");
      i === 0 ? (firstLeter = elem.split("")[0].toLowerCase()): (firstLeter = elem.split("")[0].toUpperCase());
      arrLetter.splice(0, 1, firstLeter);
      return arrLetter.join("");
  }).join("");
  
  return camelCaseStr;
  
};
console.log(makeCamelCase("background-color"));
makeCamelCase("background-color") // 'backgroundColor';
makeCamelCase("list-style-image"); //  'listStyleImage';
makeCamelCase("webkit-transition")  // 'webkitTransition';
makeCamelCase("border-style-red") // borderStyleRed;
makeCamelCase("class-class-class-class") // classClassClassClass
