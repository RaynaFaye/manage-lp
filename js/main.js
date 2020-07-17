const menuButton = document.querySelector('.header__menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menu = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__menu__container');
const menuLinks = document.querySelectorAll('.header__menu__link');

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

menuLinks.forEach((link) => {
  link.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('header__menu__link')) {
      return;
    } else {
      menu.classList.add('hidden');
      menuContainer.classList.remove('open');
      menuButtonImage.src = 'images/icon-hamburger.svg';
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
