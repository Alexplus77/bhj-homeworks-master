const divValue = document.querySelector(".dropdown__value");
const divList = document.querySelector(".dropdown__list");
const itemAll = document.querySelectorAll(".dropdown__item");


function openList() {
  divList.classList.toggle("dropdown__list_active");
}

function closeList(event) {
  event.preventDefault();
  divList.classList.remove("dropdown__list_active");
  divValue.textContent = event.target.textContent;
}

function hideList(event) {
  if (event.target !== divValue) {
    divList.classList.remove("dropdown__list_active");
  }
}

divValue.addEventListener("click", openList);
divList.addEventListener("click", closeList);
document.addEventListener("click", hideList);
