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

const displeyWin = () => setTimeout(() => alert(dead === statusWin ? 'Вы выиграли' : 'Вы проиграли'), 10)

function win() {
  if (dead === statusWin && lost <= statusLost) {
    displeyWin()
    reset();
  } else if (lost > statusLost) {
    displeyWin()
    reset();
  }
}
function reset() {
    setTimeout(() => {
       dead = 0;
  lost = 0;
  document.querySelector("#dead").textContent = dead;
  document.querySelector("#lost").textContent = lost; 
    },20)  
}
