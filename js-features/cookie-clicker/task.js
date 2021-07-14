//! Игра-кликер.
let count = document.querySelector("#clicker__counter").textContent;
let imgClick = document.querySelector("img");
imgClick.addEventListener("click", click);

function click() {
  document.querySelector("#clicker__counter").textContent = count++;
  count % 2 ? (imgClick.width = 400) : (imgClick.width = 200);
}
