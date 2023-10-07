'strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');
const scoreNumber = document.querySelector('.score');
const highscoreNumber = document.querySelector('.highscore');
const again = document.querySelector('.again');
const number = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', () => {
  // when no input
  if (!guess.value) {
    displayMessage('⛔️ No number!');
  } else if (Number(guess.value) === secretNumber) {
    displayMessage = '🎉 Correct Number!';
    body.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highscoreNumber.textContent = highscore;
    }
  }
  // when it is wrong
  else if (Number(guess.value) !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(
        Number(guess.value) > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  scoreNumber.textContent = score;
  number.textContent = '?';
  guess.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
