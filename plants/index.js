console.log('75 баллов');

const menu = document.querySelector('.nav__body');
const burger = document.querySelector('.hamburger');
const lines = document.querySelector('.hamburger__line');
const nav = document.querySelector('.nav');
const body = document.body;

// При клике на иконку hamburger вызываем openHamburger
burger.addEventListener("click", openHamburger);

// При клике на поле вне активного меню происходит его закрытие
menu.addEventListener("click", e => {
    if (e.target.classList.contains('nav__body')) {
        menu.classList.remove("active");
        nav.classList.remove("active");
        burger.classList.remove("active");
        lines.classList.remove("active");
        body.classList.remove("noscroll");
        }
    }

);

// Выполняем переключение стилей при клике ..
function openHamburger(e) {
  e.preventDefault();
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  lines.classList.toggle("active");
  body.classList.toggle("noscroll");
}


// Закрытие меню при нажатии на ссылку меню
const links = Array.from(nav.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие бургерМеню при клике на пункты меню
function closeOnClick() {
    menu.classList.remove("active");
    nav.classList.remove("active");
    burger.classList.remove("active");
    lines.classList.remove("active");
    body.classList.remove("noscroll");
  }
