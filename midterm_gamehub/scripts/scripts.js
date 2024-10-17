const word = "apple"; //word to guess
let currentRow = 0;
const maxRows = 6;

document.getElementById('submitGuess').addEventListener('click', handleGuess);

function handleGuess() {
    const guessInput = document.getElementById('guessInput').value.toLowerCase();
    if (guessInput.length !== 5) {
        document.getElementById('message').textContent = "Please enter a 5-letter word.";
        return;
    }

    document.getElementById('message').textContent = "";
    displayGuess(guessInput);

    if (guessInput === word) {
        setTimeout(() => {
            if (confirm("Congratulations! You guessed the word. Do you want to play again?")) {
                window.location.reload(); // Refresh the page
            }
        }, 100);
    } else if (currentRow === maxRows - 1) {
        setTimeout(() => {
            if (confirm(`Game over! The word was ${word}. Do you want to play again?`)) {
                window.location.reload();
            }
        }, 100);
    } else {
        currentRow++;
        document.getElementById('guessInput').value = '';
        document.getElementById('guessInput').focus();
    }
}
//create wordle display
function displayGuess(guess) {
    const board = document.getElementById('board');
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = guess[i];

        if (guess[i] === word[i]) {
            cell.classList.add('correct');
        } else if (word.includes(guess[i])) {
            cell.classList.add('present');
        } else {
            cell.classList.add('absent');
        }

        board.appendChild(cell);
    }
}
