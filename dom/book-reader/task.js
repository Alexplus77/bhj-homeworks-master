const fontSize = [...document.querySelectorAll(".font-size")];
const textContent = document.querySelector(".book__content");

const changeSize = () => {
  return (e) => {
    e.preventDefault();
    reset("font-size_active");
    e.target.classList.add("font-size_active");
    textContent.style.fontSize = getComputedStyle(e.target).fontSize;
  };
};

const reset = (active) => {
  fontSize.forEach((elem) => {
    elem.classList.remove(active);
  });
};

let font = changeSize();

fontSize.forEach((elem) => elem.addEventListener("click", font));
