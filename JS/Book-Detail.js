window.addEventListener('load', function() {
  var radioButtons = document.querySelectorAll('.book-radio');
  var buyButton = document.querySelector('.buy-book-button');

  if (buyButton) {
    console.log('Element found!');
  } else {
    console.log('Element not found.');
  }

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        buyButton.style.backgroundColor = '#000000';
        buyButton.style.color = '#FFFFFF';
        buyButton.textContent = 'Buy through Gumroad';

        console.log('LOGGED');
    });
  });
});
