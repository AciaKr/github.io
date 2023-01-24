console.log('65 баллов');

const menu = document.querySelector('.header__navigation');
const burger = document.querySelector('.hamburger');
const lines = document.querySelector('.hamburger__line');
const nav = document.querySelector('.nav');
const body = document.body;
// const links = document.querySelector('.nav__link');


function openMenu() {
    document.querySelector('.header__navigation').classList.add('active');
    document.querySelector('.hamburger').classList.add('active');
    document.querySelector('.nav__link').classList.add('active');
    document.querySelector('.hamburger__line').classList.add('active');
    // burger.classList.toggle('active');
    // nav.classList.toggle('active');
  }

// burger.onclick = function () { openMenu(); }
burger.onclick = function () {

    if (burger.className !== 'active') {
        openMenu(); 
    } else { closeOnClick(); }
    console.log(burger.classList.contains('active'));
}
//   function closeMenu() {
//     setTimeout(() => {
//         document.querySelector('.hamburger__line').classList.remove('active');
//         document.querySelector('.hamburger').classList.remove('active');
//         document.querySelector('.nav__link').classList.remove('active');
//         document.querySelector('.header__navigation').classList.remove('active');
//     }, 1000);
//   }
// if (burger.className === 'active') {
//     burger.onclick = function () { closeOnClick(); }
// }

// console.log(burger.classList.contains('active'));

//   links.forEach(el => el.addEventListener('click', closeMenu));

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(nav.children);

// // Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// // Закрытие попапа при клике на меню
function closeOnClick() {
    document.querySelector('.header__navigation').classList.remove("active");
    document.querySelector('.hamburger__line').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.nav__link').classList.remove('active');
//   body.classList.remove("noscroll");
}

// function burgerMenu(selector) {
//     const menu = document.querySelector(selector);
//     const overlay = document.querySelector('.burger-menu_overlay');
//     const body = document.querySelector('body');

//     button.addEventListener('click', e => {
//         e.preventDefault();
//         toggleMenu();
//     });

//     lines.addEventListener('click', e => {
//         e.preventDefault();
//         toggleMenu();
//     });

//     links.addEventListener('click', () => toggleMenu);
//     overlay.addEventListener('click', () => toggleMenu);

//     function toggleMenu(){
//         if (menu.classList.contains('header__navigation_active')) {
//             menu.classList.remove('header__navigation_active');
//             body.style.overflow = 'visible';
//         } else {
//             menu.classList.add('header__navigation_active');
//             body.style.overflow = 'hidden';
//         }
//     }
// }

// burgerMenu('.header__navigation');

// function burgerMenu(selector) {
//     let menu = $(selector);
//     let button = menu.find('.hamburger', '.hamburger__line');
//     let links = menu.find('.nav__link');
//     let overlay = menu.find('.burger-menu_overlay');
    
//     button.on('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//     });
    
//     links.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());
    
//     function toggleMenu(){
//       menu.toggleClass('header__navigation_active');
      
//       if (menu.hasClass('header__navigation_active')) {
//         $('body').css('overlow', 'hidden');
//       } else {
//         $('body').css('overlow', 'visible');
//       }
//     }
//   }
  
//   burgerMenu('.header__navigation');
