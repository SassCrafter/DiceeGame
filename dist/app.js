//const diceImages = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png'];

const diceImages = [
	{
		path: './images/dice1.png',
		number: 1
	},
	{
		path: './images/dice2.png',
		number: 2
	},
	{
		path: './images/dice3.png',
		number: 3
	},
	{
		path: './images/dice4.png',
		number: 4
	},
	{
		path: './images/dice5.png',
		number: 5
	},
	{
		path: './images/dice6.png',
		number: 6
	}
];

let firstPlayerScore = 0;
let secondPlayerScore = 0;

const playBtn = document.querySelector('.game__btn');
const playerImg1 = document.getElementById('player__img--1');
const playerImg2 = document.getElementById('player__img--2');
const gameScoreEl = document.querySelector('.game__score');


function randomNumber(max) {
	return Math.floor(Math.random() * max);
}

function play() {
	const firstDice = diceImages[randomNumber(diceImages.length)];
	const secondDice = diceImages[randomNumber(diceImages.length)];
	playerImg1.src = firstDice.path;
	playerImg2.src = secondDice.path;

	const winner = selectWinner(firstDice.number, secondDice.number);

	showWinner(winner);
}

function selectWinner(n1, n2) {
	return n1 > n2 ? 'one' : n1 < n2 ? 'two' : 'draw';
}

function showWinner(winner) {
	gameScoreEl.innerText = `${firstPlayerScore} : ${secondPlayerScore}`;
}

playBtn.addEventListener('click', play);

window.addEventListener('keydown', (e) => { e.code === 'Space' && play()})