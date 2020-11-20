const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const diff = Math.floor((newYearsDate - currentDate) / 1000);

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const seconds = diff % 60;

    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    daysEl.innerHTML = days;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

console.log(999);