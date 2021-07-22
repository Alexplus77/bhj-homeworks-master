const divValue = document.querySelector(".dropdown__value");
const divList = document.querySelector(".dropdown__list");
const itemAll = document.querySelectorAll(".dropdown__item");

function openList() {
  divList.classList.add("dropdown__list_active");
}

function closeList(event) {
  event.preventDefault();
  divList.classList.remove("dropdown__list_active");
  divValue.textContent = event.target.textContent;
}
divValue.addEventListener("click", openList);
divList.addEventListener("click", closeList);
