window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  let windowPosition = window.scrollY > 10;
  navbar.classList.toggle('sticky', windowPosition);
});

function navSlide() {
  const burger = document.querySelector('.menu-btn');
  const nav = document.querySelector('.navbar .menu');
  const burgerIcon = document.querySelector('.menu-btn i');
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
  const link1 = document.querySelector('.navbar .menu li a');
  const link2 = document.querySelectorAll('.navbar .menu li a')[1];
  const link3 = document.querySelectorAll('.navbar .menu li a')[2];
  link1.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
  link2.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
  link3.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
}

navSlide();
