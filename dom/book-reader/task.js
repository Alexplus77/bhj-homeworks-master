const fontSize = [...document.querySelectorAll(".font-size")];
const textContent = document.querySelector(".book__content");

const changeSize = (e) => {
  e.preventDefault();
  reset();
  if (e.target.dataset["size"] === undefined) {
    e.target.dataset["size"] = "medium";
  }
  e.target.classList.add("font-size_active");
  textContent.style.fontSize = e.target.dataset["size"];
};

const reset = () => {
  fontSize.forEach((elem) => {
    elem.classList.remove("font-size_active");
  });
};

fontSize.forEach((elem) => elem.addEventListener("click", changeSize));
