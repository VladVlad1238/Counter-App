let counterButton = document.querySelector('.js-counter__button');
let counterMinus = document.querySelector('.js-counter__minus');
let resetButton = document.querySelector('.js-reset__button');
let counterText = document.querySelector('.js-counter');
let counter = 0;


counterButton.addEventListener('click', function() {
  counter = counter + 1;

  counterText.innerHTML = counter + ' reps';

});

counterMinus.addEventListener('click', function() {
  counter = counter - 1;

  counterText.innerHTML = counter + ' reps';
});

resetButton.addEventListener('click', function() {
  counter = 0;
  counterText.innerHTML = counter + ' rep';
});