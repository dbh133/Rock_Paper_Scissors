const btn = document.querySelectorAll('button');
const score = document.querySelector('.player');
const compScore = document.querySelector('.computer');
const scores = document.querySelector('.scores');
const div = document.createElement('div');
const content = document.querySelector('.content');
let playerScore = 0;
let computerScore = 0;
let games = null;
let computerSelection = () => {
	const choices = ['Rock', 'Paper', 'Scissors'];
	let choice = choices[Math.floor(Math.random() * choices.length)];
	return choice.toLowerCase();
};

function playRound(playerSelection, computerSelection) {
	const PLAYER = 0;
	const COMPUTER = 1;
	const TIE = 2;

	if (playerSelection.toLowerCase() === computerSelection) {
		return TIE;
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection === 'scissors'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection === 'rock'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection === 'paper'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection === 'paper'
	) {
		return COMPUTER;
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection === 'scissors'
	) {
		return COMPUTER;
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection === 'rock'
	) {
		return COMPUTER;
	}
}

btn.forEach((button) => {
	button.addEventListener('click', () => {
		games = playRound(button.textContent, computerSelection());
		if (games === 0) {
			playerScore += 1;
		} else if (games === 1) {
			computerScore += 1;
		}
		score.textContent = `Player: ${playerScore}`;
		compScore.textContent = `Computer: ${computerScore}`;
		scores.appendChild(score);
		scores.appendChild(compScore);

		if (playerScore === 5 || computerScore === 5) {
			if (playerScore > computerScore) {
				div.textContent = 'You Won!';
				content.appendChild(div);
			} else {
				div.textContent = 'Computer Wins!';
				content.appendChild(div);
			}
			playerScore = 0;
			computerScore = 0;
		}
	});
});
