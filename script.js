'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (sc) {
  document.querySelector('.score').textContent = sc;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number🛑';
    displayMessage('No number🛑');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎇';
    displayMessage('Correct Number🎇');
    document.querySelector('.number').textContent = secretNumber;
    //when player wins
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent
        // = guess > secretNumber ? '📈 Too high!': '📈 Too high!';
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too high!');
        score--;
        // document.querySelector('.score').textContent = score;
        displayScore(score);
      } else {
        // document.querySelector('.message').textContent = '🕹 You lost the game!';
        displayMessage('🕹 You lost the game!');
        // document.querySelector('.score').textContent = 0;
        displayScore(0);
      }
    }
  }
});
//         //highScore
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🕹 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber)
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🕹 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
