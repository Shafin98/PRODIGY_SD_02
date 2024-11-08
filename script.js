
let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;
const max = 10;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("guess").addEventListener("click", makeGuess);
    document.getElementById("reset").addEventListener("click", resetGame);
});

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guess = parseInt(guessInput.value);


    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.innerText = "Please enter a number between 1 and 100.";
        feedback.style.color = 'red';
        return;
    }

    attempts++;

    if (attempts > max) {
        feedback.innerText = `You have reached maximum attempts! better try next time`;
        feedback.style.color = 'red';
        attempts = 0;
    } 

    if (guess === randomNumber) {
        if (attempts === 1) {
            feedback.innerText = `Congratulations! You guessed it in first try`;
            feedback.style.color = '#54ebde';
        } else {
            feedback.innerText = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
            feedback.style.color = 'green';
        }        
    } else if (guess < randomNumber) {
        feedback.innerText = "Too low! Try again.";
        feedback.style.color = '#ffcc00';
    } else {
        feedback.innerText = "Too high! Try again.";
        feedback.style.color = '#ffcc00';
    }

    guessInput.value = ''; 
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 0; 
    const feedback = document.getElementById('feedback');
    feedback.innerText = "Game reset! Try guessing a new number.";
    feedback.style.color = 'blue';
}

