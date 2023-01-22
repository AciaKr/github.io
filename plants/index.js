console.log("65 баллов")

const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
// const body = document.body;

// // Клонируем меню, чтобы задать свои стили для мобильной версии
// const menu = document.querySelector("#nav").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
// hamburger.addEventListener("click", hamburgerHandler);

// Выполняем действия при клике ..
// function hamburgerHandler(e) {
//   e.preventDefault();
//   // Переключаем стили элементов при клике
//   popup.classList.toggle("open");
//   hamburger.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// }

// // Здесь мы рендерим элементы в наш попап
// function renderPopup() {
//   popup.appendChild(nav);
// }

// // Код для закрытия меню при нажатии на ссылку
// const links = Array.from(nav.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// // Закрытие попапа при клике на меню
// function closeOnClick() {
//   popup.classList.remove("open");
//   hamburger.classList.remove("active");
//   body.classList.remove("noscroll");
// }