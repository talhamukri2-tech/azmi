const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const reviews = [...document.querySelectorAll('.review')];
const currentLabel = document.querySelector('#review-current');
let activeReview = 0;

function showReview(index) {
  reviews[activeReview].classList.remove('active');
  activeReview = (index + reviews.length) % reviews.length;
  reviews[activeReview].classList.add('active');
  currentLabel.textContent = String(activeReview + 1);
}

document.querySelector('.slider-prev').addEventListener('click', () => showReview(activeReview - 1));
document.querySelector('.slider-next').addEventListener('click', () => showReview(activeReview + 1));

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Hello Azmi Tutorial, I would like to enquire about admission.',
    '',
    `Name: ${data.get('name')}`,
    `Mobile: ${data.get('phone')}`,
    `Class: ${data.get('class')}`,
    `Board: ${data.get('board')}`,
    `Preferred mode: ${data.get('mode')}`
  ].join('\n');
  window.open(`https://wa.me/919664619348?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
