const caseRotator1 = [...document.querySelector(".rotator1").children];
const caseRotator2 = [...document.querySelector(".rotator2").children];
const caseRotator3 = [...document.querySelector(".rotator3").children];
const caseRotator4 = [...document.querySelector(".rotator4").children];
const caseRotator5 = [...document.querySelector(".rotator5").children];
const caseRotator6 = [...document.querySelector(".rotator6").children];


function rotator(arr) {
  return () => {
    let index = arr.findIndex((elem) =>
      elem.classList.contains("rotator__case_active")
    );
    removeCase(arr);
    index++;
    if (index === arr.length) {
      index = 0;
    }
    arr[index].classList.add("rotator__case_active");
    arr[index].style.color = arr[index].dataset["color"];
  };
}

function removeCase(arr) {
  arr.forEach((elem) => elem.classList.remove("rotator__case_active"));
}

let case1 = rotator(caseRotator1);
setInterval(case1, 1000);
let case2 = rotator(caseRotator2);
setInterval(case2, 2000);
let case3 = rotator(caseRotator3);
setInterval(case3, 3000);
let case4 = rotator(caseRotator4);
setInterval(case4, 4000);
let case5 = rotator(caseRotator5);
setInterval(case5, 5000);
let case6 = rotator(caseRotator6);
setInterval(case6, 6000);
