window.addEventListener('load', function() {
  var activeWhatWeCoverDropdownToggle = null;
  var activeFaqDropdownToggle = null;

  var whatWeCoverDropdownToggles = document.querySelectorAll('.what-we-cover-dropdown-toggle');
  var faqDropdownToggles = document.querySelectorAll('.workshops-faq-dropdown-toggle');

  whatWeCoverDropdownToggles.forEach(whatWeCoverDropdownToggle => {
    whatWeCoverDropdownToggle.addEventListener('click', function() {
      var toggleIcon = whatWeCoverDropdownToggle.closest('.what-we-cover-dropdown').querySelector('.h5.mobile.toggle-icon.workshops');

      if (whatWeCoverDropdownToggle !== activeWhatWeCoverDropdownToggle) {
        // Only change the text content of other toggle icons if a new dropdown toggle is clicked
        if (activeWhatWeCoverDropdownToggle) {
          var otherToggleIcons = activeWhatWeCoverDropdownToggle.closest('.what-we-cover-dropdown').querySelectorAll('.h5.mobile.toggle-icon.workshops');
          otherToggleIcons.forEach(icon => {
            icon.textContent = '+';
          });
        }

        activeWhatWeCoverDropdownToggle = whatWeCoverDropdownToggle;
      }

      if (whatWeCoverDropdownToggle.classList.contains('w--open')) {
        toggleIcon.textContent = '+';
      } else {
        toggleIcon.textContent = '–';
      }
    });
  });

  faqDropdownToggles.forEach(faqDropdownToggle => {
    faqDropdownToggle.addEventListener('click', function() {
      var faqToggleIcon = faqDropdownToggle.closest('.workshops-faq-dropdown-toggle').querySelector('.h5.mobile.toggle-icon.faq');

      if (faqDropdownToggle !== activeFaqDropdownToggle) {
        // Only change the text content of other toggle icons if a new dropdown toggle is clicked
        if (activeFaqDropdownToggle) {
          var otherToggleIcons = activeFaqDropdownToggle.closest('.workshops-faq-dropdown-toggle').querySelectorAll('.h5.mobile.toggle-icon.faq');
          otherToggleIcons.forEach(icon => {
            icon.textContent = '+';
          });
        }

        activeFaqDropdownToggle = faqDropdownToggle;
      }

      if (faqDropdownToggle.classList.contains('w--open')) {
        faqToggleIcon.textContent = '+';
      } else {
        faqToggleIcon.textContent = '–';
      }
    });
  });
});
