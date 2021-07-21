const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");
let sliderDot = document.querySelector(".slider__dots");
const [...sliderItems] = document.querySelectorAll(".slider__item");

let sliderDots = [];
let index = 0;

function renderDots() {
  sliderItems.forEach((elem, i) => {
    newDot = document.createElement("div");
    newDot.className = "slider__dot ";
    if (i === 0) {
      newDot.classList.add("slider__dot_active");
    }
    sliderDots.push(sliderDot.appendChild(newDot));
  });
}
renderDots();

function show() {
  sliderItems.forEach((elem, i) => {
    elem.classList.remove("slider__item_active");
    sliderDots[i].classList.remove("slider__dot_active");
  });
  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
}

function setNext() {
  index++;
  if (index >= sliderItems.length) {
    index = 0;
  }
  show();
}

function setPrev() {
  index--;
  index + 1 <= 0 ? (index = sliderItems.length - 1) : index;
  show();
}

function setDot(event) {
  index = sliderDots.findIndex((elem) => event.target === elem);
  show();
}

sliderNext.addEventListener("click", setNext);
sliderPrev.addEventListener("click", setPrev);
sliderDots.forEach((elem) => elem.addEventListener("click", setDot));
