window.addEventListener('load', function() {
  var whatWeCoverDropdownToggles = document.querySelectorAll('.what-we-cover-dropdown-toggle');
  var faqDropdownToggles = document.querySelectorAll('.workshops-faq-dropdown-toggle');

  whatWeCoverDropdownToggles.forEach(whatWeCoverDropdownToggle => {
    whatWeCoverDropdownToggle.addEventListener('click', function() {
      var toggleIcon = whatWeCoverDropdownToggle.closest('.what-we-cover-dropdown').querySelector('.h5.mobile.toggle-icon.workshops');

      if (whatWeCoverDropdownToggle.classList.contains('w--open')) {
        toggleIcon.textContent = '+';
      } else {
        toggleIcon.textContent = '–';
      }
    });
  });

  faqDropdownToggles.forEach(faqDropdownToggle => {
    faqDropdownToggle.addEventListener('click', function() {
      var faqToggleIcon = faqDropdownToggle.closest('.workshops-faq-dropdown').querySelector('.h5.mobile.toggle-icon.faq');

      if (faqDropdownToggle.classList.contains('w--open')) {
        faqToggleIcon.textContent = '+';
      } else {
        faqToggleIcon.textContent = '–';
      }
    });
  });
});
