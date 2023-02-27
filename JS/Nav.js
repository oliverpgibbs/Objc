var menuBtn = document.querySelector('.menu-button w-nav-button');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.add('fixed-style');
  menuBtn.textContent = menuBtn.textContent === 'Menu' ? 'Close' : 'Menu';
});
