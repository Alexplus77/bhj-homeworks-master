const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");
const sliderDot = document.querySelector(".slider__dots");
const [...sliderItems] = document.querySelectorAll(".slider__item");
const [...sliderDots] = document.querySelectorAll(".slider__dot");

let index = 0;
function show() {
  sliderItems.forEach((elem) => {
    elem.classList.remove("slider__item_active");
  });
  sliderDots.forEach((elem) => {
    elem.classList.remove("slider__dot_active");
  });
  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
  console.log(index);
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
  index + 1 <= 0 ? index = sliderItems.length - 1 : index;
  
  show();
}
function setDot(event) {
  index = sliderDots.findIndex((elem) => event.target === elem);
  show();
}

sliderNext.addEventListener("click", setNext);
sliderPrev.addEventListener("click", setPrev);
sliderDot.addEventListener("click", setDot);
