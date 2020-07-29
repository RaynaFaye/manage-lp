const menuButton = document.querySelector('.header__menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menu = document.querySelector('.header__menu');
const menuContainer = document.querySelector('.header__menu__container');
const menuLinks = document.querySelectorAll('.header__menu__link');

const form = document.querySelector('.footer__newsletter__form');
const emailInput = form.querySelector('.footer__newsletter__input');
const tooltip = document.querySelector('.footer__tooltip');
const tooltipTwo = document.querySelector('.footer__tooltip-two');

const testimonialDots = document.querySelectorAll('.testimonials__dot');
const testimonials = document.querySelectorAll('.testimonial');
const testinmonialsArray = Array.from(testimonials);

// Functionality for Menu
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

//Functionality for sending email for newsletter
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInputValue = event.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regexEmail.test(emailInputValue)) {
    tooltip.style.display = 'block';
    emailInput.style.border = '1px solid hsl(0, 88%, 59%)';
    emailInput.style.color = 'hsl(0, 88%, 59%)';
  } else {
    tooltip.style.display = 'none';
    tooltipTwo.style.display = 'block';
    emailInput.style.border = 'none';
    emailInput.style.color = 'unset';
    setTimeout(function () {
      tooltipTwo.style.display = 'none';
    }, 3000);
    form.reset();
  }
});

//Funtionality for testimonial slider
testimonialDots.forEach((testimonialDot) => {
  testimonialDot.addEventListener('click', () => {
    testimonialDots.forEach((testimonialDot) => {
      testimonialDot.classList.remove('active');
    });
    testimonialDot.classList.add('active');
    for (i = 0; i < testimonialDots.length; i++) {
      if (testimonialDots[i].classList.contains('active')) {
        testinmonialsArray[i].style.display = 'block';
      } else {
        testinmonialsArray[i].style.display = 'none';
      }
    }
  });
});
