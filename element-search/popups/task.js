const modalMain = document.querySelector("#modal_main");
const modalAll = document.querySelectorAll(".modal");
const succesPopup = document.querySelector("#modal_success");
const bodyPop = document.querySelector("body");

function openMain() {
  modalMain.classList.add("modal_active");
}
setTimeout(openMain, 5000)


function openPopup(event) {
      if (event.target.classList.contains("show-success")) {      
    succesPopup.classList.add("modal_active");
  }
  closePopup(event);
}

function closePopup(event) {
  if (
    event.target.classList.contains("modal__close_times") ||
    event.target.classList.contains("modal_active")
  ) {
    modalAll.forEach((elem) => {
      elem.classList.remove("modal_active");
    });
  }
}

bodyPop.addEventListener("click", openPopup);
