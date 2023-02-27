window.addEventListener('load', function() {
  var menuBtn = document.querySelector('.menu-button');

  menuBtn.addEventListener('click', function() {
    menuBtn.textContent = menuBtn.textContent === 'Menu' ? 'Close' : 'Menu';
  });
});
