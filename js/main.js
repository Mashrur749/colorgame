var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');


init();


function init() {
	setupModeButton();

	setupSquares();

	reset();
}



function reset() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		h1.style.backgroundColor = "stealblue";
	}
}


resetButton.addEventListener("click", function () {
	reset();
})


function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function setupModeButton() {
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function () {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		})
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function () {
			clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay = "Correct!";
				h1.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again";
				changeColor(pickedColor);
			} else {
				messageDisplay = "Try Again.";
				this.style.backgroundColor = "#232323";
			}
		})
	}
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}