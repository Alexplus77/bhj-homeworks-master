const hole = document.querySelectorAll('.hole');
const holeAll = document.querySelector(".hole-game");
let dead = document.querySelector('#dead').textContent;
let lost = document.querySelector("#lost").textContent;

for (elem of hole) {
    if (elem.className.includes("hole_has-mole"))
    {
     elem.addEventListener('click', deadMole)
        console.log(elem)
    } else {
        elem.addEventListener("click", lostMole);
    }
}
function deadMole() {    
    document.querySelector("#dead").textContent = dead++;
}
function lostMole() {
  document.querySelector("#lost").textContent = lost++;
}