// Show Current Time
function showTime() {
    const date = new Date();
    const time = document.querySelector('.time');
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting()
    setTimeout(showTime, 1000);
}

// Show Current Date
function showDate() {
    const date = new Date();
    const showedDate = document.querySelector('.date');
    const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
    showedDate.textContent = currentDate;
}
showTime();

// Show Greeting
function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;
    const greeting = document.querySelector('.greeting');
    greeting.textContent = greetingText;
}

function getTimeOfDay(hours) {
    const rate = hours/6;
    if (0 <= rate && rate < 1) { return 'night'; }
    if (1 <= rate && rate < 2) { return 'morning'; }
    if (2 <= rate && rate < 3) { return 'afternoon'; }
    if (3 <= rate && rate < 4) { return 'evening'; }
}

// Input/Output greeting name
window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
const nameUser = document.getElementsByTagName("input")[1];
nameUser.placeholder = '[Enter name]';

function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
}

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
}

// Change background Image
const body = document.body;
body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
