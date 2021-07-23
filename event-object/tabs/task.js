const [...menuAll] = document.querySelectorAll(".tab");
const [...contentAll] = document.querySelectorAll(".tab__content");
const navMenu = document.querySelector(".tab__navigation");

let index = 0;

function openMenuContent(e) {
  hideMenuContent();

  e.target.classList.add("tab_active");

  index = menuAll.findIndex((elem) => elem.classList.contains("tab_active"));
  contentAll[index].classList.add("tab__content_active");
}

function hideMenuContent() {
  menuAll.forEach((elem) => {
    elem.classList.remove("tab_active");
    contentAll[index].classList.remove("tab__content_active");
  });
}

navMenu.addEventListener("click", openMenuContent);
