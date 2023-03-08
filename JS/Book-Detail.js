window.addEventListener('load', function() {
  const radioButtons = document.querySelectorAll('.book-radio');
  const buyButton = document.querySelector('.buy-book-button');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', event => {
      if (event.target.checked) {
        buyButton.style.backgroundColor = '#000000';
        buyButton.style.color = '#FFFFFF';
        buyButton.style.setProperty('background-color', '#000000', 'important');
        buyButton.style.setProperty('color', '#FFFFFF', 'important');
        buyButton.textContent = 'Buy through Gumroad';
      } else {
        buyButton.style.backgroundColor = '#D3D6D6';
        buyButton.style.color = '#666666';
        buyButton.style.setProperty('background-color', '#D3D6D6', 'important');
        buyButton.style.setProperty('color', '#666666', 'important');
        buyButton.textContent = 'Make a selection';
      }
    });
  });
});
