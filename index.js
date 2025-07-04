const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function update() {
  elapsedTime = Date.now() - startTime;
  const time = new Date(elapsedTime);

  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  // On divise les ms par 10 pour garder 2 chiffres (centièmes)
  const centiseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');

  display.textContent = `${minutes}:${seconds}.${centiseconds}`;
}

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00.00";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
