const caseRotator = [...document.querySelectorAll(".rotator__case")];

function removeCase() {
  caseRotator.forEach((elem) => elem.classList.remove("rotator__case_active"));
}

function setCount(elem) {
  
  return () => {
    elem.style.color=elem.dataset['color']
    elem.classList.add("rotator__case_active");     
  };
}

caseRotator.forEach((elem) => {
  let count = setCount(elem);
  let time = elem.dataset["speed"];

  console.log(elem, time);
  setInterval(count, time);
 
});
removeCase()