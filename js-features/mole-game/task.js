const holeAll = document.querySelector(".hole-game");
let lost = 0;
let dead = 0;
const findHole = (event) => {
  if (event.target.classList.contains("hole_has-mole")) {
    document.querySelector("#dead").textContent = dead++;
  } else {
    document.querySelector("#lost").textContent = lost++;
  }
  win();  
};

holeAll.addEventListener("click", findHole);

function win() {
  if (dead === 10 && lost <= 5) {
    alert("Вы выиграли");
    dead = 0;
    lost = 0;
    document.querySelector("#dead").textContent = dead;
    document.querySelector("#lost").textContent = lost;
  } else if (lost > 5) {
    alert("Вы проиграли");
    dead = 0;
    lost = 0;
    document.querySelector("#dead").textContent = dead;
    document.querySelector("#lost").textContent = lost;
  }
}
