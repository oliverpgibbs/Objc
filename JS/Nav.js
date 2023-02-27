window.addEventListener('load', function() {
  var menuBtn = document.querySelector('.menu-button');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.add('fixed-style');
    menuBtn.textContent = menuBtn.textContent === 'Menu' ? 'Close' : 'Menu';
  });
});
