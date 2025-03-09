let timer;
let isRunning = false;
let timeLeft = 25 * 60; // Default Pomodoro time (25 min)
const alarmSound = document.getElementById("alarm");

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

const pomodoroBtn = document.getElementById("pomodoro");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");

// Update timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

// Start Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alarmSound.play();
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Pause Timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset Timer (resets to default Pomodoro time)
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

// Stop Timer (resets completely)
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}

// Mode Selection
pomodoroBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
});

shortBreakBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 5 * 60;
    updateDisplay();
});

longBreakBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 15 * 60;
    updateDisplay();
});

// Button event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
stopBtn.addEventListener("click", stopTimer);

// Initialize Display
updateDisplay();
