const caseRotator = [...document.querySelectorAll(".rotator__case")];

function rotator() {
  let index = caseRotator.findIndex((elem) =>
    elem.classList.contains("rotator__case_active")
  );
  removeCase();
  index++;
  if (index === caseRotator.length) {
    index = 0;
  }
  caseRotator[index].classList.add("rotator__case_active");
}

function removeCase() {
  caseRotator.forEach((elem) => elem.classList.remove("rotator__case_active"));
}
setInterval(rotator, 1000);
