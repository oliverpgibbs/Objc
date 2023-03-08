window.addEventListener('load', function() {
  var radioButtons = document.querySelectorAll('.book-radio');
  var buyButton = document.querySelector('.buy-book-button');
  var orButton = document.querySelector('.or-see-bundles-button');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', function() {
        buyButton.style.backgroundColor = '#000000';
        buyButton.style.color = '#FFFFFF';
        buyButton.textContent = 'Buy through Gumroad';

        orButton.style.backgroundColor = '#000000';
        orButton.style.color = '#FFFFFF';
        orButton.textContent = 'Buy through Gumroad';

        console.log('LOGGED');
    });
  });
});
