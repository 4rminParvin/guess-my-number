'use strict';

// Generate a random number between 1 and 100
let secretNum = Math.trunc(Math.random() * 100) + 1;

// DOM elements
const againBtn = document.querySelector('.again.btn');
const checkBtn = document.querySelector('.check.btn');
let numberEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let messageEl = document.querySelector('.message');
let highScoreEl = document.querySelector('.highscore');

// State variables
const scoreState = 20;
const numberState = '?';
const messageState = 'Start guessing! RIGHT NOW!';
const highScoreState = 0;

// Variables
let score = scoreState;
let number = numberState;
let message = messageState;
let highScore = highScoreState;

// Change number shown in the DOM
const changeNumber = function (val) {
    numberEl.textContent = val;
}

// Change score shown in the DOM
const changeScore = function (val) {
    scoreEl.textContent = val;
}

// Change message shown in the DOM
const changeMessage = function (val) {
    messageEl.textContent = val;
}

// Change highscore shown in the DOM
const changeHighScore = function (val) {
    highScoreEl.textContent = val;
}

// Game logic
checkBtn.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // Winning
    if (guess === secretNum) {
        message = 'YOU WON';
        changeMessage(message);
        changeNumber(guess);
        if (score > highScore) {
            highScore = score;
            changeHighScore(highScore);
        }
    
    // Wrong guess
    } else if (guess != secretNum) {
        // Decrease the score, but do not go below zero
        if (score > 0) {
            score--;
            changeScore(score);
        }

        if (guess > (secretNum + 25)) {
            message = 'TOO HIGH!';
            changeMessage(message);
        } else if (guess > secretNum && guess < (secretNum + 25)) {
            message = 'HIGH!';
            changeMessage(message);
        } else if (guess < (secretNum - 25)) {
            message = 'TOO LOW!';
            changeMessage(message);
        } else if (guess < secretNum) {
            message = 'LOW!';
            changeMessage(message);
        }
    }


    // Losing
    if (score < 1) {
        message = 'YOU LOST!';
        changeMessage(message);
    }

    // Check for number validity
    if (guess > 100 || guess < 1) {
        message = 'You must input a VALID number!';
        changeMessage(message);
    }

    // Check for number input
    if (!guess) {
        message = 'You must input a number!';
        changeMessage(message);
    }
});

// Again button
againBtn.addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * 100) + 1;
    changeScore(scoreState);
    score = scoreState;
    changeNumber(numberState);
    changeMessage(messageState);
    document.querySelector('.guess').value = 0;

});