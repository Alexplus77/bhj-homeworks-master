const findNodeAll = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];
const findNodeOne = (selector, parent = document) => parent.querySelector(selector);
const interestsItem = findNodeAll(".interests");


const childrenCheck = (children, parents) => {
  children.forEach((child) => {
      child.addEventListener("change", () => {
        if (children.every((elem) => elem.checked)) {
          findNodeOne('input', parents).indeterminate = false
           findNodeOne("input", parents).checked = true;
           }
    else {
          findNodeOne("input", parents).indeterminate = true;
          findNodeOne("input", parents).checked = false;
        }  
           
      });
    });
}

parentsCheck = (children, parents) => {
  parents.addEventListener("change", (e) => {
      e.target.checked
        ? children.forEach((elem) => (elem.checked = true))
        : children.forEach((elem) => (elem.checked = false));
    });
}

interestsItem.forEach((el) => {
  if (el.classList.contains("interests_active")) {
    const parents = el.parentNode.firstElementChild;
    const children = findNodeAll("input", el);
childrenCheck(children, parents)    
parentsCheck(children, parents)    
  }
});

