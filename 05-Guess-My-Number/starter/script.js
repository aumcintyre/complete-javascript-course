'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = newScore;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //WHEN NO GUESS IS ENTERED
  if (!guess) {
    displayMessage('🤦‍♂️ No number was guessed!');
  }

  //WHEN PLAYER GUESSES CORRECTLY
  else if (guess === secretNumber) {
    displayMessage('👌 You guessed correctly!');
    document.querySelector('.number').textContent = secretNumber;
    if (newScore > highScore) {
      highScore = newScore;

      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //REFACTORED FROM 2 BLOCKS BELOW BECAUSE OF DUPLICATED CODE
  else if (guess !== secretNumber) {
    if (newScore > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '👇Too high!' : '👆Too low!';
      newScore--;
      document.querySelector('.score').textContent = newScore;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }

  //WHEN PLAYER GUESS IS TOO HIGH
  /*   else if (guess > secretNumber) {
    if (newScore > 1) {
      document.querySelector('.message').textContent =
        '👇Too high! Guess lower.';
      newScore--;
      document.querySelector('.score').textContent = newScore;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
    console.log(newScore);
  } */

  //WHEN PLAYER GUESS IS TOO LOW
  /*   else if (guess < secretNumber) {
    if (newScore > 1) {
      document.querySelector('.message').textContent =
        '👆Too low! Guess higher.';
      newScore--;
      document.querySelector('.score').textContent = newScore;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

console.log(newScore);

const resetGame = function () {
  newScore = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = newScore;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', resetGame());
