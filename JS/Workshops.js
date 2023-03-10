window.addEventListener('load', function() {
  var whatWeCoverDropdownToggle = document.querySelector('.what-we-cover-dropdown-toggle');
  var toggleIcon = document.querySelector('.h5.mobile.toggle-icon');

  whatWeCoverDropdownToggle.addEventListener('click', function() {
    if (whatWeCoverDropdownToggle.classList.contains('w--open')) {
      toggleIcon.textContent = '+'
    } else {
      toggleIcon.textContent = '–'
    }
  });

  var workshopsFAQDropdownToggle = document.querySelector('.workshops-faq-dropdown-toggle');
  var faqToggleIcon = document.querySelector('.h5.mobile.toggle-icon');

  workshopsFAQDropdownToggle.addEventListener('click', function() {
    if (workshopsFAQDropdownToggle.classList.contains('w--open')) {
      faqToggleIcon.textContent = '-'
    } else {
      faqToggleIcon.textContent = '+'
    }
  });
});
