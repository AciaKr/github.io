import playList from './playList.js';

const date = new Date();
const hours = date.getHours();
const timeOfDay = getTimeOfDay(hours);
const time = document.querySelector('.time');
const showedDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nameUser = document.getElementsByTagName("input")[1];
nameUser.placeholder = '[Enter name]';

// Show Current Time
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate()
    showGreeting()
    setTimeout(showTime, 1000);
}
showTime();

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
function getTimeOfDay() {
    const rate = hours/6;
    if (0 <= rate && rate < 1) { return 'night'; }
    if (1 <= rate && rate < 2) { return 'morning'; }
    if (2 <= rate && rate < 3) { return 'afternoon'; }
    if (3 <= rate && rate < 4) { return 'evening'; }
}

// Save greeting name in localStorage
function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

// Get greeting name from localStorage
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage)

//------------------------
// Change background Image
//------------------------
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.body;
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
        playBtn.classList.remove('pause');
    } else {playBtn.classList.add('pause');}
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
    playAudio();
    toggleBtn();
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
    playAudio();
    toggleBtn();
}
playPrevBtn.addEventListener('click', playPrev);

//------------------
// Widget of Weather
//------------------
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
city.value = 'Minsk';

// function getWeather
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const weather = await res.json();
    if(weather.cod == '404' || weather.cod == '400') {
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = ``;
        weatherDescription.textContent =  ``;
        windSpeed.textContent =  ``;
        humidity.textContent =  ``;
        alert(weather.message);
    } else {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${weather.weather[0].id}`);
        temperature.textContent = `${weather.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = weather.weather[0].description;
        windSpeed.textContent = `Wind speed: ${weather.wind.speed.toFixed(0)} m/s`;
        humidity.textContent = `Humidity: ${weather.main.humidity.toFixed(0)} %`;
    }
}

// function set city after Enter in input
function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

//------------------
// Quotes
//------------------
const textQuote = document.querySelector('.quote');
const authorQuote = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');
let randomQuote;

// function output quotes
async function getQuotes() {
    const quotes = './js/data.json';
    const res = await fetch(quotes);
    const quote = await res.json();
    let quoteNum = getRandomNum(0, 2);
    // check the same quotes after onload
    while (randomQuote == quoteNum) {
        quoteNum = getRandomNum(0, 2);
    }

    randomQuote = quoteNum;
    textQuote.textContent = `"${quote[randomQuote].text}"`;
    authorQuote.textContent = quote[randomQuote].author;
  }
getQuotes();

changeQuoteBtn.addEventListener('click', getQuotes);
document.addEventListener('DOMContentLoaded', getQuotes);
