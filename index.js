let computerSelection = '';
let playerSelection = '';
let highscorePlayer = 0;
let highscoreComputer = 0;
const buttons = document.querySelectorAll('input');
const p = document.querySelectorAll('p');


buttons.forEach(button => button.addEventListener('click', game));

function computerPlay() {
    let result = getRandomIntInclusive(1,9);
    if (result > 3 && result <= 6) {
        computerSelection = 'ROCK';
    } else if (result <= 3) {
        computerSelection = 'SCISSOR';
    } else if (result >= 6) {
        computerSelection = 'PAPER';
    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  red = Math.floor(Math.random() * (max - min + 1)) + min;
  return red;
}

function play(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        p[1].innerHTML = 'It\'s a draw! Rock draws with Rock! Try again. :(';
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        p[1].innerHTML = 'Congratulations! Paper beats Rock! You win!!!';
        highscorePlayer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK') {
        p[1].innerHTML = 'Too bad! You Lose! Rock beats Scissor! :\'(';
        highscoreComputer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        p[1].innerHTML = 'Too bad! You Lose! Paper beats Rock! :\'(';
        highscoreComputer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        p[1].innerHTML = 'It\'s a draw! Paper draws with Paper! Try again. :(';
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') {
        p[1].innerHTML = 'Congratulations! Scissor beats Paper! You win!!!';
        highscorePlayer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') {
        p[1].innerHTML = 'Congratulations! Rock beats Scissor! You win!!!';
        highscorePlayer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR') {
        p[1].innerHTML = 'Too bad! You Lose! Scissor beats Paper! :\'(';
        highscoreComputer += 1;
        p[3].innerHTML = 'Player: ' + highscorePlayer + ' - ' +
            highscoreComputer + ' :Computer';
        finishGame();
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'SCISSOR') {
        p[1].innerHTML = 'It\'s a draw! Scissor draws with Scissor! Try again. :(';
    }   
}

function finishGame() {
    if (highscorePlayer === 5 || highscoreComputer === 5) {
        alert('The game finished! Result: Player: ' + highscorePlayer + ' vs ' + highscoreComputer + ' :Computer');
        location.reload(true);
    }
}


function game() { 
        computerPlay();
        playerSelection = this.value;
        playerSelection = playerSelection.toUpperCase();
        play(playerSelection,computerSelection); 
}