const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

// Play game
const play = e => {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// get computer choice
const getComputerChoice = () => {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock'
    } else if(rand <= .67) {
        return 'paper'
    } else {
        return 'scissors';
    }
}

function getWinner(playerChoice, computerChoice) {
    if(playerChoice ===  computerChoice) {
        return 'draw';
    } else if(playerChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer';
    } else if(playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player';
    } else if(playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player';
    } else if(playerChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer';
    } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player';
    } else if(playerChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer';
    } 
}

const showWinner = (winner, computerChoice) => {
    if(winner === 'Player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win">You win!<h1>
            <i class="fas fa-hand-${computerChoice}" fa-10x></i>
            <p>Computer chose ${computerChoice}</p>
        `;
    } else if(winner === 'Computer') {
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You lose!<h1>
            <i class="fas fa-hand-${computerChoice}" fa-10x></i>
            <p>Computer chose ${computerChoice}</p>
        `;
    } else {
        result.innerHTML = `
            <h1>It's a draw!<h1>
            <i class="fas fa-hand-${computerChoice}" fa-10x></i>
            <p>Computer chose ${computerChoice}</p>
        `;
    }
    // Show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';
}

// To clear the modal
const clearModal = e => {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// Restarting the game
const restartGame = () => {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);