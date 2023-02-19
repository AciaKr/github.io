
const date = new Date();
const hours = date.getHours();
const timeOfDay = getTimeOfDay(hours);
const body = document.body;
const time = document.querySelector('.time');
const showedDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nameUser = document.getElementsByTagName("input")[1];
nameUser.placeholder = '[Enter name]';
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const playBtn = document.querySelector('.play');
const audio = new Audio();


// Show Current Time
showTime();

function showTime() {
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

// Show Current Date
function showDate() {
    const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('en-US', options);
    showedDate.textContent = currentDate;
}

// Show Greeting
function showGreeting() {
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

// Choice time of day
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

// Save greeting name in localStorage
function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
}

// Get greeting name from localStorage
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
}

// Change background Image
let randomNum = getRandomNum(1, 20);

// Set background Image
function setBg() {
    const img = new Image();
    const bgNum = randomNum.toString().padStart(2,'0');
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    };
}
setBg()

// function create random number image included min and max
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function getSlideNext
function getSlideNext() {
    if (randomNum == 20) {
        randomNum = 1;
    } else {
        randomNum += 1;
    }
    setBg(randomNum);
}

// function getSlidePrev
function getSlidePrev() {
    if (randomNum == 1) {
        randomNum = 20;
    } else {
        randomNum -= 1;
    }
    setBg(randomNum);
}

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)

// Audio player
let isPlay = false;

function playAudio() {
    audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
    if(!isPlay) {
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}

// Switch icon player
function toggleBtn() {
    if(!isPlay) {
        playBtn.classList.remove('pause');
    } else {
        playBtn.classList.add('pause');
    }
}

  playBtn.addEventListener('click', playAudio);
  playBtn.addEventListener('click', toggleBtn);