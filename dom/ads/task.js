const caseRotator = [...document.querySelectorAll(".rotator__case")];

function removeCase() {
  caseRotator.forEach((elem) => elem.classList.remove("rotator__case_active"));
}

function setCount(index) {
  return () => {
    caseRotator[index].classList.add("rotator__case_active");
    caseRotator[index].style.color = caseRotator[index].dataset["color"];
  };
}

caseRotator.forEach((elem, index) => {
  let count = setCount(index);
  let time = elem.dataset["speed"];

  console.log(elem, time);
  setInterval(count, time);
  removeCase();
});

// elem.style.color = elem.dataset["color"];
// elem.classList.add("rotator__case_active");
// removeCase();
// index++;
// if (index === caseRotator.length) {
//   index = 0;
// }
