// script.js
let interval;
let countdownDate;

function startCountdown() {
    countdownDate = new Date(document.getElementById('datetime-picker').value).getTime();
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(interval);
}

function clearCountdown() {
    clearInterval(interval);
    document.getElementById('datetime-picker').value = "";
    document.getElementById('countdown').innerHTML = `
        <div><span id="days">0</span>Days</div>
        <div><span id="hours">0</span>Hours</div>
        <div><span id="minutes">0</span>Minutes</div>
        <div><span id="seconds">0</span>Seconds</div>
    `;
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<h2>Countdown Finished</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
