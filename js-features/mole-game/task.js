const holeAll = document.querySelector(".hole-game");
let lost = 0;
let dead = 0;
const statusWin = 10;
const statusLost = 5;
const findHole = (event) => {
  if (event.target.classList.contains("hole_has-mole")) {
    document.querySelector("#dead").textContent = ++dead;
  } else {
    document.querySelector("#lost").textContent = ++lost;
  }
  win();  
};

holeAll.addEventListener("click", findHole);

function win() {
  if (dead === statusWin && lost <= statusLost) {
      alert("Вы выиграли");
      reset()
    
  } else if (lost > statusLost) {
      alert("Вы проиграли");
      reset()
   
  }
}
function reset() {
    dead = 0;
    lost = 0;
    document.querySelector("#dead").textContent = dead;
    document.querySelector("#lost").textContent = lost;
}