const modalMain = document.querySelector("#modal_main");
const modalAll = document.querySelectorAll(".modal");
const succesPopup = document.querySelector("#modal_success");

function openPopup(event) {
  modalMain.classList.toggle("modal_active");
  if (event.target.classList.contains("show-success")) {
    succesPopup.classList.add("modal_active");
  }
  closePopup(event);
}

function closePopup(event) {
  if (event.target.classList.contains("modal__close_times")) {
    modalAll.forEach((elem) => {
      elem.classList.remove("modal_active");
    });
  }
}
document.addEventListener("click", openPopup);
