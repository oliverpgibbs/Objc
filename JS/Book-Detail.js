const radioButtons = document.querySelectorAll('.book-radio');
const buyButton = document.querySelector('.buy-book-button');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', event => {
    if (event.target.checked) {
      buyButton.style.backgroundColor = '#000000';
      buyButton.style.color = '#FFFFFF';
      buyButton.textContent = 'Buy through Gumroad';

      console.log('CHECKED');
    } else {
      buyButton.style.backgroundColor = '#D3D6D6';
      buyButton.style.color = '#666666';
      buyButton.textContent = 'Make a selection';

      console.log('UNCHECKED');
    }
  });
});
