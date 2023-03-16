document.addEventListener("DOMContentLoaded", () => {
  var monthlyRadioButton = document.querySelector('.subscription-term-radio-button.monthly');
  var monthlySubscriptionChoiceContainer = document.querySelector('.subscription-choice-container.monthly');
  var monthlySubscriptionCost = document.querySelector('.subscription-cost.monthly');
  var monthlySubscriptionTerm = document.querySelector('.subscription-term.monthly');
  var yearlyRadioButton = document.querySelector('.subscription-term-radio-button.yearly');
  var yearlySubscriptionChoiceContainer = document.querySelector('.subscription-choice-container.yearly');
  var yearlySubscriptionCost = document.querySelector('.subscription-cost.yearly');
  var yearlySubscriptionTerm = document.querySelector('.subscription-term.yearly');

  // apply default styles for monthly subscription elements
  function applyMonthlyStyles() {
    monthlySubscriptionChoiceContainer.style.backgroundColor = '#FFFFFF';
    monthlySubscriptionCost.style.color = '#111E26';
    monthlySubscriptionTerm.style.color = '#111E26BF';
  }

  // apply default styles for yearly subscription elements
  function applyYearlyStyles() {
    yearlySubscriptionChoiceContainer.style.backgroundColor = '#FFFFFF';
    yearlySubscriptionCost.style.color = '#111E26';
    yearlySubscriptionTerm.style.color = '#111E26BF';
  }

  // reset styles for monthly subscription elements
  function resetMonthlyStyles() {
    monthlySubscriptionChoiceContainer.style.backgroundColor = '#F9F7FA26';
    monthlySubscriptionCost.style.color = '#FFFFFFBF';
    monthlySubscriptionTerm.style.color = '#FFFFFF80';
  }

  // reset styles for yearly subscription elements
  function resetYearlyStyles() {
    yearlySubscriptionChoiceContainer.style.backgroundColor = '#F9F7FA26';
    yearlySubscriptionCost.style.color = '#FFFFFFBF';
    yearlySubscriptionTerm.style.color = '#FFFFFF80';
  }

  // check monthly radio button by default
  monthlyRadioButton.checked = true;
  applyMonthlyStyles(); // apply default styles for monthly subscription elements

  // add event listener to monthly subscription choice container
  monthlySubscriptionChoiceContainer.addEventListener('click', function() {
    // check monthly radio button and uncheck yearly radio button
    monthlyRadioButton.checked = true;
    yearlyRadioButton.checked = false;

    // apply styles for monthly subscription elements
    applyMonthlyStyles();

    // reset styles for yearly subscription elements
    resetYearlyStyles();
  });

  // add event listener to yearly subscription choice container
  yearlySubscriptionChoiceContainer.addEventListener('click', function() {
    // check yearly radio button and uncheck monthly radio button
    yearlyRadioButton.checked = true;
    monthlyRadioButton.checked = false;

    // apply styles for yearly subscription elements
    applyYearlyStyles();

    // reset styles for monthly subscription elements
    resetMonthlyStyles();
  });
});
