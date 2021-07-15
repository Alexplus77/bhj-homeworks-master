
const menu_sub = document.querySelector(".menu .menu_sub");
const menuItemParent = document.querySelector(".menu");


const menuItem = (event) => {
  event.target.classList.contains("menu__link") && notActivMenu(event)
    ? activeMenu(event)
    : notActivMenu(event);

  if (event.target.tagName === "A") {
    event.preventDefault();
  }
};
function activeMenu(event) {
  event.target.parentElement.querySelector(".menu_sub").className =
    "menu menu_sub menu_active";
}
function notActivMenu(event) {
  if (
    !event.target.parentElement
      .querySelector(".menu_sub")
      .className.includes("menu_active")
  ) {
    return true;
  }
  event.target.parentElement.querySelector(".menu_sub").className =
    "menu menu_sub";
}
menuItemParent.addEventListener("click", menuItem);
