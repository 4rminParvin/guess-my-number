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

    // Losing
    if (score <= 1) {
        score = 0;
        changeScore(score);
        message = 'YOU LOST!';
        changeMessage(message);
        return;
    }    
    
    // Check for number validity
    if (guess > 100 || guess <= 0) {
        message = 'You must enter a VALID number!';
        changeMessage(message);
        return;
    }

    // Decrease the score, but do not go below zero
    if (score > 0 && guess && guess <= 100 && guess >= 1) {
        score--;
        changeScore(score);
    }

    // Check for number input
    if (!guess) {
        message = 'You must enter a number!';
        changeMessage(message);
        return;
    }

    if (guess === secretNum) {
        message = 'YOU WON';
        changeMessage(message);
        changeNumber(guess);
        if (score > highScore) {
            highScore = score;
            changeHighScore(highScore);
        }
    
    // Wrong guess
    } else if (guess !== secretNum) {

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

});

// Again button
againBtn.addEventListener('click', function () {
    secretNum = Math.trunc(Math.random() * 100) + 1;
    changeScore(scoreState);
    score = scoreState;
    changeNumber(numberState);
    changeMessage(messageState);
    document.querySelector('.guess').value = '';

});