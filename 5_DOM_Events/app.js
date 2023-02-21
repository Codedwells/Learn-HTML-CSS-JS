// Onclick events
const counter = document.getElementById('counter');
const addButton = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');

function add() {
	counter.textContent = Number(counter.textContent) + 1;
}

function subtract() {
	if (Number(counter.textContent) >= 1) {
		counter.textContent = Number(counter.textContent) - 1;
	}
}

addButton.addEventListener('click', add);
subBtn.addEventListener('click', subtract);

// Guessing Game
const input = document.getElementById('input');
const guessBtn = document.getElementById('guess');
const message = document.getElementById('message');

const secretNum = 43;

function checkIfCorrect() {
	let guess = input.value;

	if (!guess) {
		message.textContent = 'Please add your guess';
		return;
	}

	if (guess < secretNum) {
		message.textContent = 'We need a higher Number...';
	} else if (guess > secretNum) {
		message.textContent = 'We need a lower Number...';
	} else if (guess == secretNum) {
		message.textContent = 'You win!!!!';
	} else {
		message.textContent = 'Please add numbers only';
	}
}

guessBtn.addEventListener('click', checkIfCorrect);
