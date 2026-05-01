// Бургер-меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.nav__close');

burger?.addEventListener('click', () => {
  nav.classList.add('is-open');
  burger.setAttribute('aria-expanded', 'true');
});

closeBtn?.addEventListener('click', () => {
  nav.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
});

// Закрытие по клику на ссылку (моб.)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger?.setAttribute('aria-expanded', 'false');
  });
});
