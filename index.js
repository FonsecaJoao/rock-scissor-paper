let computerSelection = '';
let playerSelection = '';
let highscorePlayer = 0;
let highscoreComputer = 0;
const buttons = document.querySelectorAll('input');

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
        console.log('It\'s a draw! Rock draws with Rock! Try again. :(');
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log('Congratulations! Paper beats Rock! You win!!!');
        highscorePlayer += 1;
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK') {
        console.log('Too bad! You Lose! Rock beats Scissor! :\'(');
        highscoreComputer += 1;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        console.log('Too bad! You Lose! Paper beats Rock! :\'(');
        highscoreComputer += 1;
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        console.log('It\'s a draw! Paper draws with Paper! Try again. :(');
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') {
        console.log('Congratulations! Scissor beats Paper! You win!!!');
        highscorePlayer += 1;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') {
        console.log('Congratulations! Rock beats Scissor! You win!!!');
        highscorePlayer += 1;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSOR') {
        console.log('Too bad! You Lose! Scissor beats Paper! :\'(');
        highscoreComputer += 1;
    } else if (playerSelection === 'SCISSOR' && computerSelection === 'SCISSOR') {
        console.log('It\'s a draw! Scissor draws with Scissor! Try again. :(');
    }
}


function game() {
    console.log(highscorePlayer);
    console.log(highscoreComputer);
    if (highscorePlayer <= 4 && highscoreComputer <= 4) {
        computerPlay();
        playerSelection = this.value;
        playerSelection = playerSelection.toUpperCase();
        play(playerSelection,computerSelection); 
    } else {
        alert('The game finished! Result: Player: ' + highscorePlayer + ' vs ' + highscoreComputer + ' :Computer');
        location.reload(true);
    }
}