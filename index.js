let display = document.getElementById('display');
let startBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let lapsContainer = document.getElementById('laps');
let themeToggle = document.getElementById('themeToggle');

let isRunning = false;
let timer = null;
let seconds = 0;


themeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
};

startBtn.onclick = function() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
        startBtn.textContent = 'Stop';
    }
};

resetBtn.onclick = function() {
    clearInterval(timer);
    seconds = 0;
    display.textContent = '00:00:00';
    lapsContainer.innerHTML = '';
    isRunning = false;
    startBtn.textContent = 'Start';
};

lapBtn.onclick = function() {
    if (seconds > 0) {
        let lapItem = document.createElement('div');
        lapItem.className = 'lap-item';
        lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${display.textContent}`;
        lapsContainer.insertBefore(lapItem, lapsContainer.firstChild);
    }
};

function updateTime() {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    
    display.textContent = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(secs).padStart(2, '0');
}