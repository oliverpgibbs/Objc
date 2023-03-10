window.addEventListener('load', function() {
  var activeFooterDropdownToggle = null;

  var footerDropdownToggles = document.querySelectorAll('.footer-dropdown-toggle');

  footerDropdownToggles.forEach(footerDropdownToggle => {
    footerDropdownToggle.addEventListener('click', function() {
      var toggleIcon = footerDropdownToggle.closest('.footer-dropdown').querySelector('.h5.mobile.toggle-icon.footer');

      if (footerDropdownToggle !== activeFooterDropdownToggle) {
        // Only change the text content of other toggle icons if a new dropdown toggle is clicked
        if (activeFooterDropdownToggle) {
          var otherToggleIcons = activeWhatWeCoverDropdownToggle.closest('.footer-dropdown').querySelectorAll('.h5.mobile.toggle-icon.footer');
          otherToggleIcons.forEach(icon => {
            icon.textContent = '+';
          });
        }

        activeFooterDropdownToggle = footerDropdownToggle;
      }

      if (footerDropdownToggle.classList.contains('w--open')) {
        toggleIcon.textContent = '+';
      } else {
        toggleIcon.textContent = '–';
      }
    });
  });
});
