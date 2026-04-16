const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const timerText = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let seconds = 25 * 60;
let timerId = null;

function drawTimer() {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  timerText.textContent = `${mm}:${ss}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  list.prepend(li);
  form.reset();
});

startBtn.addEventListener("click", () => {
  if (timerId) return;
  timerId = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      return;
    }
    seconds -= 1;
    drawTimer();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  seconds = 25 * 60;
  drawTimer();
});

drawTimer();
