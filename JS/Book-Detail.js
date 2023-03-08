window.addEventListener('load', function() {
  const radioButtons = document.querySelectorAll('.book-radio');
  const buyButton = document.querySelector('.buy-book-button');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', event => {
      if (event.target.checked) {
        buyButton.style.backgroundColor = '#000000 !important';
        buyButton.style.color = '#FFFFFF !important';
        buyButton.textContent = 'Buy through Gumroad';

        console.log('CHECKED');
      } else {
        buyButton.style.backgroundColor = '#D3D6D6 !important';
        buyButton.style.color = '#666666 !important';
        buyButton.textContent = 'Make a selection';

        console.log('UNCHECKED');
      }
    });
  });
});
