function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	let choice = Math.floor(Math.random() * choices.length);
	return choices[choice];
}

function play(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
		console.log(`you both picked ${playerSelection.toLowerCase()}`);
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection.toLowerCase() === 'scissors'
	) {
		console.log('Player Wins');
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection.toLowerCase() === 'rock'
	) {
		console.log('Player Wins');
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection.toLowerCase() === 'paper'
	) {
		console.log('Player Wins');
	} else if (
		playerSelection.toLowerCase() === 'rock' &&
		computerSelection.toLowerCase() === 'paper'
	) {
		console.log('Computer Wins');
	} else if (
		playerSelection.toLowerCase() === 'paper' &&
		computerSelection.toLowerCase() === 'scissors'
	) {
		console.log('Computer Wins');
	} else if (
		playerSelection.toLowerCase() === 'scissors' &&
		computerSelection.toLowerCase() === 'rock'
	) {
		console.log('Computer Wins');
	}
}

let computerChoice = getComputerChoice();
