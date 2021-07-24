const textForRotator = [...document.querySelectorAll(".rotator__case")];
const sliderText = document.querySelectorAll(".rotator");

function rotator() {
  let index = textForRotator.findIndex((elem) =>
    elem.classList.contains("rotator__case_active")
  );
  removeRotator();
  index++;
  if (index === textForRotator.length) {
    index = 0;
  }
  textForRotator[index].classList.add("rotator__case_active");
}

function removeRotator() {
  textForRotator.forEach((elem) =>
    elem.classList.remove("rotator__case_active")
  );
}
setInterval(rotator, 1000);
