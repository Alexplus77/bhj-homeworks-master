const menuAll = [...document.querySelectorAll(".tab")];
const contentAll = [...document.querySelectorAll(".tab__content")];

function setActiveTab(e) {
  let index = 0;
  closePrevTab(index);

  e.target.classList.add("tab_active");

  index = menuAll.findIndex((elem) => elem.classList.contains("tab_active"));
  contentAll[index].classList.add("tab__content_active");
}

function closePrevTab(index) {
  menuAll.forEach((elem) => {
    elem.classList.remove("tab_active");
    contentAll[index].classList.remove("tab__content_active");
  });
}
menuAll.forEach((tab) => tab.addEventListener("click", setActiveTab));
