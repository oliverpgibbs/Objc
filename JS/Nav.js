var menuBtn = document.querySelector('.navbar.nav-container.nav-content.menu-button');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.add('fixed-style');
  menuBtn.textContent = menuBtn.textContent === 'Menu' ? 'Close' : 'Menu';
});
