let counterButton = document.querySelector('.js-counter__button');
let counterMinus = document.querySelector('.js-counter__minus');
let resetButton = document.querySelector('.js-reset__button');
let counterText = document.querySelector('.js-counter');
let counterDistance = document.querySelector('.js-distance');
let counter = 0;
let distance = 0;

counterButton.addEventListener('click', function() {
  counter = counter + 1;
  distance = distance + 50;

  counterText.innerHTML = counter;
  counterDistance.innerHTML = distance + ' метров';

});

counterMinus.addEventListener('click', function() {
  counter = counter - 1;
  distance = distance - 50;

  counterText.innerHTML = counter;
  counterDistance.innerHTML = distance + ' метров';
});

resetButton.addEventListener('click', function() {
  counter = 0;
  distance = 0;

  counterText.innerHTML = counter;
  counterDistance.innerHTML = distance + ' метров';
});