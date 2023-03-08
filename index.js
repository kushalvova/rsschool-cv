const burgerItem = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const menuCloseFirst = document.querySelector('.nav__close');
const menuCloseSecond = document.querySelector('.nav__list');
const menuCloseThird = document.querySelector('main');
burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-active');
});
menuCloseFirst.addEventListener('click', () => {
    menu.classList.remove('nav-active');
});    
menuCloseSecond.addEventListener('click', () => {
    menu.classList.remove('nav-active');
});
menuCloseThird.addEventListener('click', () => {
    menu.classList.remove('nav-active');
});