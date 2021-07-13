let count = document.querySelector("#timer").textContent;
function timer() {
  if (count > 0) {
    count--;

    document.querySelector("#timer").textContent = count;
  } else if (count === 0) {
    alert("Вы победили в конкурсе!");
    count = null;
  }
}

setInterval(timer, 1000);
