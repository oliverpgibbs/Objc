window.addEventListener('load', function() {
  var radioButtons = document.querySelectorAll('.book-radio');
  var buyButton = document.querySelector('.buy-book-button.submit');

  console.log('Radio buttons found:', radioButtons.length);
  console.log('Buy button found:', buyButton);

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', event => {
      console.log('Radio button changed:', event.target.value);

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
