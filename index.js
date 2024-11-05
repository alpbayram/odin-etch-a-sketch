function randomColorGenerator() {
	red = Math.floor(Math.random() * 255 + 1)
	blue = Math.floor(Math.random() * 255 + 1)
	green = Math.floor(Math.random() * 255 + 1)

	const hexRed = red.toString(16).padStart(2, "0")
	const hexGreen = green.toString(16).padStart(2, "0")
	const hexBlue = blue.toString(16).padStart(2, "0")
	return `#${hexRed}${hexGreen}${hexBlue}`
}

const centeredContainer = document.querySelector(".centered-container")
const square = document.createElement("div")
const squareContainer = document.querySelector(".square-container")

for (column = 1; column <= 16; column++) {
	let idNumber = 0

	for (row = 1; row <= 16; row++) {
		const square = document.createElement("div")
		square.classList.add("square")
		square.style.backgroundColor = "white"
		square.id = `${idNumber}`
		squareContainer.append(square)
	}
}
let selectSquares = null
const button = document.querySelector(".button")
const button2 = document.querySelector(".button2")
button.addEventListener("click", getGridSize)
button2.addEventListener("click", resetBoard)
function resetBoard() {
	const allSquare = document.querySelectorAll(".square")
	function squareFunction(square) {
		square.style.backgroundColor = "white"
		square.style.opacity = "1"
	}
	allSquare.forEach(squareFunction)
}
function squareFunction(square) {
	square.addEventListener("mouseenter", paintOnHover)
}
selectSquares = document.querySelectorAll(".square")
selectSquares.forEach(squareFunction)
console.log(selectSquares)

function paintOnHover(event) {
	randomColor = randomColorGenerator()
	console.log(randomColor)
	if (event.type === "mouseenter") {
		switch (event.target.id) {
			case "0":
				console.log(event.type)
				console.log(event.target)
				console.log("girdi")
				event.target.style.backgroundColor = `${randomColor}`
				event.target.style.opacity = "0.1"
				event.target.id = "1"
				break
			case "1":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.2"
				event.target.id = "2"
				break
			case "2":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.3"
				event.target.id = "3"
				break
			case "3":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.4"
				event.target.id = "4"
				break
			case "4":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.5"
				event.target.id = "5"
				break
			case "5":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.6"
				event.target.id = "6"
				break
			case "6":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.7"
				event.target.id = "7"
				break
			case "7":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.8"
				event.target.id = "8"
				break
			case "8":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "0.9"
				event.target.id = "9"
				break
			case "9":
				console.log(event.type)
				console.log("girdi")
				event.target.style.opacity = "1"
				event.target.id = "10"
				break
			default:
				console.log(event.type)
				console.log("hata")
				break
		}
	}
}

function getGridSize() {
	const allSquare = document.querySelectorAll(".square")
	console.log(allSquare)
	let getSize = prompt("Kaç satır ve kaç sütundan oluşacak bir ızgara istiyorsunuz?")
	if (
		getSize === null ||
		getSize === "" ||
		isNaN(Number(getSize)) ||
		Number(getSize) > 100 ||
		Number(getSize) < 1
	) {
		alert("Geçersiz giriş, lütfen 1 ile 100 arasında bir sayı girin.")
	} else {
		function squareFunction(square) {
			square.remove()
		}
		allSquare.forEach(squareFunction)
		let idNumber = 0
		for (let column = 1; column <= getSize; column++) {
			for (let row = 1; row <= getSize; row++) {
				const square = document.createElement("div")
				square.classList.add("square")
				square.style.flexBasis = `calc(100% / ${getSize})`
				square.style.backgroundColor = "white"
				square.id = `${idNumber}`
				squareContainer.append(square)

				// square.addEventListener("mouseenter",paintOnHover)
			}
		}
		selectSquares = document.querySelectorAll(".square")
		console.log(selectSquares)
		function squareFunction1(square) {
			square.addEventListener("mouseenter", paintOnHover)
			square.addEventListener("touchmove", (event) => {
				event.preventDefault(); // Sayfanın kaymasını engeller
				paintOnHover(event); // Mobilde kaydırarak boyama sağlar
			});
		}

		selectSquares.forEach(squareFunction1)
	}
}
