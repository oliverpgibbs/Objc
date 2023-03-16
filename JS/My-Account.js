document.addEventListener('DOMContentLoaded', () => {
  const profileButton = document.querySelector('.my-account-button.profile');
  const profileContainer = document.querySelector('.profile-container');
  const billingButton = document.querySelector('.my-account-button.billing');
  const billingContainer = document.querySelector('.billing-container');
  const teamButton = document.querySelector('.my-account-button.team');
  const teamContainer = document.querySelector('.team-container');

  // Set initial state
  profileButton.classList.add('selected');
  profileContainer.style.display = 'flex';
  billingContainer.style.display = 'none';

  profileButton.addEventListener('click', () => {
    profileButton.classList.add('selected');
    billingButton.classList.remove('selected');
    teamButton.classList.remove('selected');

    profileContainer.style.display = 'flex';
    billingContainer.style.display = 'none';
    teamContainer.style.display = 'none';
  });

  billingButton.addEventListener('click', () => {
    profileButton.classList.remove('selected');
    billingButton.classList.add('selected');
    teamButton.classList.remove('selected');

    profileContainer.style.display = 'none';
    billingContainer.style.display = 'flex';
    teamContainer.style.display = 'none';
  });

  teamButton.addEventListener('click', () => {
    profileButton.classList.remove('selected');
    billingButton.classList.remove('selected');
    teamButton.classList.add('selected');

    profileContainer.style.display = 'none';
    billingContainer.style.display = 'none';
    teamContainer.style.display = 'flex';
  });
});
