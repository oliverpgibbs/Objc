document.addEventListener("DOMContentLoaded", () => {
  const profileButton = document.querySelector(".my-account-button.profile");
  const billingButton = document.querySelector(".my-account-button.billing");
  const profileContainer = document.querySelector(".profile-container");
  const billingContainer = document.querySelector(".billing-container");

  // Set initial state
  profileButton.classList.add("selected");
  profileContainer.style.display = "flex";
  billingContainer.style.display = "none";

  profileButton.addEventListener("click", () => {
    profileButton.classList.add("selected");
    billingButton.classList.remove("selected");
    profileContainer.style.display = "flex";
    billingContainer.style.display = "none";
  });

  billingButton.addEventListener("click", () => {
    billingButton.classList.add("selected");
    profileButton.classList.remove("selected");
    profileContainer.style.display = "none";
    billingContainer.style.display = "flex";
  });
});
