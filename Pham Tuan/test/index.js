const startBtn = document.getElementById("start-btn");
const startCard = document.getElementById("start-card");
const gameCard = document.getElementById("game-card");
const attemptCard = document.getElementById("attempt-card");
const rangeStartInput = document.getElementById("range-start");
const rangeEndInput = document.getElementById("range-end");
const attemptInput = document.getElementById("attempt-input");
const attemptInner = document.getElementById("attempt-inner");
const guessBtn = document.getElementById("guess-btn");
const guessInput = document.getElementById("guess-input");
const resultCard = document.getElementById("result-card");
const hintCard = document.getElementById("hint-card");
const hintInner = document.getElementById("hint-inner");

let start = null;
let end = null;
let attempt = null;
let guessValue = null;
let correct = null;
let guessNum = 0;

const renderMessage = (attempt, correct, isWin = true) => {
	if (isWin) {
		return /*html*/ `
    <h3>Congrats, you win in ${attempt} attempt(s)!</h3>
		<button class="btn" onclick="window.location.reload()">
			Again
		</button>`;
	}
	return /*html*/ `
     <h3>You lose! Number is ${correct}</h3>
     <button class="btn" onclick="window.location.reload()">
			Again
		</button>`;
};

const randomNum = (min, max) => {
	let random = Math.random();
	if (random === 0) random = 1;
	return Math.ceil(random * (max - min + 1) + min);
};

const compare = (guess, correct) => {
	if (guess > correct) return "Less";
	return "More";
};

rangeStartInput.addEventListener("change", (e) => {
	start = e.target.value;
});
rangeEndInput.addEventListener("change", (e) => {
	end = e.target.value;
});
attemptInput.addEventListener("change", (e) => {
	attempt = e.target.value;
});
guessInput.addEventListener("change", (e) => {
	guessValue = parseInt(e.target.value);
});

startBtn.addEventListener("click", () => {
	let isValid = true;

	if (start === null || end === null) isValid = false;
	if (start < 0 || end < 0) isValid = false;
	if (start >= end) isValid = false;

	if (!isValid) {
		alert("Invalid range (0 - ∞)!");
		return;
	}

	attemptInner.innerHTML = attempt;
	correct = randomNum(start, end);

	console.log("Correct", correct);

	startCard.classList.toggle("hidden");
	gameCard.classList.toggle("hidden");
	attemptCard.classList.toggle("hidden");
});

guessBtn.addEventListener("click", () => {
	guessNum += 1;
	attempt -= 1;
	attemptInner.innerHTML = attempt;

	if (attempt > 0 && guessValue !== correct) {
		if (hintCard.classList.contains("hidden")) {
			hintCard.classList.toggle("hidden");
		}
		hintInner.innerHTML = compare(guessValue, correct);
	}

	if (guessValue === correct) {
		resultCard.innerHTML = renderMessage(guessNum, correct);
		resultCard.classList.toggle("hidden");
		gameCard.classList.toggle("hidden");
		hintCard.classList.toggle("hidden");
		attemptCard.classList.toggle("hidden");
		return;
	}

	if (attempt < 1) {
		resultCard.innerHTML = renderMessage(guessNum, correct, false);
		resultCard.classList.toggle("hidden");
		gameCard.classList.toggle("hidden");
		if (!hintCard.classList.contains("hidden")) {
			hintCard.classList.toggle("hidden");
		}
		attemptCard.classList.toggle("hidden");
		return;
	}
});
Footer
© 2022 GitHub, Inc.