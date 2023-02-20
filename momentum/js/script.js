import playList from './playList.js';

const date = new Date();
const hours = date.getHours();
const timeOfDay = getTimeOfDay(hours);
const body = document.body;
const time = document.querySelector('.time');
const showedDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nameUser = document.getElementsByTagName("input")[1];
nameUser.placeholder = '[Enter name]';

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

// Save greeting name in localStorage
function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
}
window.addEventListener('beforeunload', setLocalStorage)

// Get greeting name from localStorage
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

//------------------------
// Change background Image
//------------------------
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
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
slideNext.addEventListener('click', getSlideNext)

// function getSlidePrev
function getSlidePrev() {
    if (randomNum == 1) {
        randomNum = 20;
    } else {
        randomNum -= 1;
    }
    setBg(randomNum);
}
slidePrev.addEventListener('click', getSlidePrev)

//-----------------
// Audio player
//----------------
const audio = new Audio();
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');
let isPlay = false;
let playNum = 0;

createPlayList();

// Create Audio player
function createPlayList() {
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        playListContainer.append(li);
        li.textContent = el.title;
    })
}

// Play/pause track
function playAudio() {
    audio.src = playList[playNum].src;
    if(!isPlay) {
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        playNow();
    } else {
        audio.pause();
        isPlay = false;
    }
}
playBtn.addEventListener('click', playAudio);

// Check current track by style
function playNow() {
    const playItems = document.querySelectorAll('.play-item');
    playItems.forEach (li => {
        li.classList.remove('item-active');
        playItems[playNum].classList.add('item-active');
    })
}

// Play next track after the end previous track
audio.onended = function(){
    playNext();
  }

// Switch icon player Play/Pause
function toggleBtn() {
    if(!isPlay) {
        playBtn.classList.toggle('pause');
    }
}
playBtn.addEventListener('click', toggleBtn);

// function play next track
function playNext() {
    if (playNum == playList.length-1) {
        playNum = 0;
    } else {
        playNum += 1;
    }
    isPlay = false;
    playAudio(playNum);
}
playNextBtn.addEventListener('click', playNext);

// function play previous track
function playPrev() {
    if (playNum == 0) {
        playNum = playList.length-1;
    } else {
        playNum -= 1;
    }
    isPlay = false;
    playAudio(playNum);
}
playPrevBtn.addEventListener('click', playPrev);


