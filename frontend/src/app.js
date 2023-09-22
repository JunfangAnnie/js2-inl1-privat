let playerScore = 0;
let playerName = '';
let playerChoice = '';
let computerScore = 0;

const playerNameInput = document.getElementById('playerNameInput');
const startButton = document.getElementById('startButton');
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')
const playerHandEl = document.querySelector('.playerHand');
const computerHandEl = document.querySelector('.computerHand')
const playerEl = document.querySelector('.p-count')
const computerEl = document.querySelector('.c-count')

const playerOptions = [rockBtn, scissorBtn, paperBtn];
const computerOptions = ['Sten', 'Sax', 'Påse'];

startButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = playerNameInput.value.trim();

    if (name !== '') {
        playerName = name;
        playerNameDisplay.textContent = playerName;
    }
});

const computer = () => {
    let totalOptions = Math.floor(Math.random() * 3);
    let computerChoice = computerOptions[totalOptions];

    return computerChoice;
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerEl.innerHTML = `${playerName}'s poäng: ${playerScore}`;
    playerHandEl.innerHTML = `Ditt val: `;
    computerHandEl.innerHTML = `Datorns val: `;
    alert(`Du förlorar. Spelet och poängen börjar om!`);
};

const game = () => {
    playerOptions.forEach((option) => {
        option.addEventListener('click', () => {
            computerHandEl.innerHTML = '';
            playerChoice = option.textContent;
            let computerChoice = computer(); 

            if (computerChoice === 'Sten' && playerChoice === 'Påse') {
                playerScore++;
                console.log('Du vinner');
            } else if (computerChoice === 'Sax' && playerChoice === 'Sten') {
                playerScore++;
                console.log('Du vinner');
            } else if (computerChoice === 'Påse' && playerChoice === 'Sax') {
                playerScore++;
                console.log('Du vinner');
            } else if (computerChoice === playerChoice) {
                console.log('Oavgjort');
            } else {
                computerScore++;
                console.log('Datorn vinner');
                resetGame();
            }

            // Uppdatera poängen och händerna
            playerEl.innerHTML = `${playerName}'s poäng: ${playerScore}`;
            playerHandEl.innerHTML = `Ditt val: ${playerChoice}`;
            computerHandEl.innerHTML = `Datorns val: ${computerChoice}`;
        });
    });
};

game();