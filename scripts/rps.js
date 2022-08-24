function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	let choice = Math.floor(Math.random() * choices.length);
	return choices[choice];
}

function play(playerSelection, computerSelection) {
	if (
		(playerSelection == 'Rock' && computerSelection == 'Paper') ||
		computerSelection == 'Scissors'
	) {
		console.log('Player Wins');
	}
}
