
let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;
const max = 10;

document.addEventListener("DOMContentLoaded", function(event) {
    const guessInput = document.getElementById('guessInput');
    const input = document.getElementById("guess");
    const reset = document.getElementById("reset");

    input.addEventListener("click", makeGuess);
    guessInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            makeGuess();
        }
    });
    
    reset.addEventListener("click", resetGame);
});

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guess = parseInt(guessInput.value);


    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.innerText = "Please enter a number between 1 and 100.";
        feedback.style.color = 'red';
        guessInput.value = '';
        setTimeout(resetGame, 1300);
        return;
    }

    attempts++;

    if (attempts > max) {
        feedback.innerText = `You have reached maximum attempts! Please reastart the game`;
        feedback.style.color = 'red';
        return;
    } 

    if (guess === randomNumber) {
        if (attempts === 1) {
            feedback.innerText = `Congratulations! You guessed it in first try`;
            feedback.style.color = '#54ebde';
        } else {
            feedback.innerText = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
            feedback.style.color = 'green';
        } 
        setTimeout(resetGame, 2000);     
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
    feedback.style.color = '#f77913;';
    guessInput.value = '';
    return;
}

