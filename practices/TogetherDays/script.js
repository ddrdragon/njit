const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const begin = '16 May 2020';

function countdown() {
    const beginDate = new Date(begin);
    const currentDate = new Date();
    const diff = Math.floor((currentDate - beginDate) / 1000);

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const seconds = diff % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);