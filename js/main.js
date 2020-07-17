const menuButton = document.querySelector('.header__menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menu = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__menu__container');

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menuButtonImage.src = 'images/icon-close.svg';
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuButtonImage.src = 'images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', 'false');
  }
  menu.classList.toggle('hidden');
  menuContainer.classList.toggle('open');
});

window.addEventListener('keyup', () => {
  if (!menu.classList.contains('hidden') && event.key === 'Escape') {
    menu.classList.add('hidden');
    menuContainer.classList.remove('open');
    menuButtonImage.src = 'images/icon-hamburger.svg';
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
