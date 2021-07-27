const menuAll = [...document.querySelectorAll(".tab")];
const contentAll = [...document.querySelectorAll(".tab__content")];

function setActiveTab(e) {
  closePrevTab();
  let index = menuAll.indexOf(e.target);
  e.target.classList.add("tab_active");
  contentAll[index].classList.add("tab__content_active");
  contentAll()[index].classList.add("tab__content_active");
}

function closePrevTab() {
  menuAll.forEach((elem) => elem.classList.remove("tab_active"));

  contentAll.forEach((elem) => elem.classList.remove("tab__content_active"));
}
menuAll.forEach((elem) => elem.addEventListener("click", setActiveTab));
