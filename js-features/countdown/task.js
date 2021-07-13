//! # Таймер обратного отсчёта

let count = document.querySelector("#timer").textContent;
function timer() {
  if (count > 0) {
    count--;
    document.querySelector("#timer").textContent =`00:00:${count}`;
    return;
  }
  alert("Вы победили в конкурсе!");
  clearInterval(timerId);
}

const timerId = setInterval(timer, 1000);
