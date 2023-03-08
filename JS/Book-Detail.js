window.addEventListener('load', function() {
  var radioButtons = document.querySelectorAll('.book-radio');
  var buyButton = document.querySelector('.buy-book-button');

  if (buyButton) {
    console.log('Element found!');
  } else {
    console.log('Element not found.');
  }

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', event => {
      if (event.target.checked) {
        buyButton.style.backgroundColor = '#000000';
        buyButton.style.color = '#FFFFFF';
        buyButton.textContent = 'Buy through Gumroad';
      } else {
        buyButton.style.backgroundColor = '#D3D6D6';
        buyButton.style.color = '#666666';
        buyButton.textContent = 'Make a selection';
      }
    });
  });
});
