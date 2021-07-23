const menuAll = [...document.querySelectorAll(".tab")];
const contentAll = [...document.querySelectorAll(".tab__content")];
let index = 0;

function setActiveTab(e) {  
  closePrevTab();
  e.target.classList.add("tab_active");

  index = menuAll.findIndex((elem) => elem.classList.contains("tab_active"));
  contentAll[index].classList.add("tab__content_active");
}

function closePrevTab() {

  menuAll.forEach((elem) => {
    elem.classList.remove("tab_active");
    contentAll[index].classList.remove("tab__content_active");
  });
  
}
menuAll.forEach((elem) => elem.addEventListener("click", setActiveTab));
