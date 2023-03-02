window.addEventListener('load', function() {
  var whatWeCoverDropdownToggle = document.querySelector('.what-we-cover-dropdown-toggle');
  var toggleIcon = document.querySelector('.h5.mobile.toggle-icon');

  whatWeCoverDropdownToggle.addEventListener('click', function() {
    if (whatWeCoverDropdownToggle.classList.contains('w--open')) {
      toggleIcon.textContent = '–'
    } else {
      toggleIcon.textContent = '+'
    }
  });
});
