window.addEventListener('load', function() {
  var whatWeCoverDropdownToggles = document.querySelectorAll('.what-we-cover-dropdown-toggle');
  var toggleIcon = document.querySelector('.h5.mobile.toggle-icon.workshops');

  whatWeCoverDropdownToggles.forEach(whatWeCoverDropdownToggle => {
    whatWeCoverDropdownToggle.addEventListener('click', function() {
      if (whatWeCoverDropdownToggle.classList.contains('w--open')) {
        toggleIcon.textContent = '+'
      } else {
        toggleIcon.textContent = '–'
      }
    });
  }

  var faqDropdownToggles = document.querySelectorAll('.workshops-faq-dropdown-toggle');
  var faqToggleIcon = document.querySelector('.h5.mobile.toggle-icon.faq');

  faqDropdownToggles.forEach(faqDropdownToggle => {
    faqDropdownToggle.addEventListener('click', function() {
      if (faqDropdownToggle.classList.contains('w--open')) {
        faqToggleIcon.textContent = '+'
      } else {
        faqToggleIcon.textContent = '–'
      }
    });
  }
});
