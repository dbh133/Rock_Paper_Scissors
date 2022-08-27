function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	let choice = Math.floor(Math.random() * choices.length);
	return choices[choice];
}

function playRound(playerSelection, computerSelection) {
	const PLAYER = 0;
	const COMPUTER = 1;
	const TIE = 2;

	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
		return TIE;
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection.toLowerCase() === 'scissors'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection.toLowerCase() === 'rock'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection.toLowerCase() === 'paper'
	) {
		return PLAYER;
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection.toLowerCase() === 'paper'
	) {
		return COMPUTER;
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection.toLowerCase() === 'scissors'
	) {
		return COMPUTER;
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection.toLowerCase() === 'rock'
	) {
		return COMPUTER;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		let computerChoice = getComputerChoice();
		let playerChoice = prompt('Enter Rock, Paper or Scissors');

		let games = playRound(playerChoice, computerChoice);

		if (games === 0) {
			playerScore += 1;
		} else if (games === 1) {
			computerScore += 1;
		}

		console.log(`Player Score ${playerScore}\nComputer Score ${computerScore}`);
	}

	if (playerScore > computerScore) {
		console.log(`You won with ${playerScore} points!`);
	} else if (playerScore === computerScore) {
		console.log(`You tied with ${playerScore} points each!`);
	} else {
		console.log(`Computer Wins with ${computerScore} points!`);
	}
}
