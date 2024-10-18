const centeredContainer = document.querySelector(".centered-container")
const square = document.createElement("div")
const squareContainer = document.querySelector(".square-container")
for (column = 1; column <= 16; column++) {
	// const columnContainer = document.createElement("div")
	// columnContainer.classList.add("column")
	// squareContainer.append(columnContainer)

	for (row = 1; row <= 16; row++) {
		const square = document.createElement("div")
		square.classList.add("square")
		square.style.backgroundColor = "red"

		squareContainer.append(square)
	}
}

const button = document.querySelector(".button")
button.addEventListener("click", getGridSize)


function getGridSize() {
    const allSquare = document.querySelectorAll(".square")
console.log(allSquare)
	let getSize = prompt("kaca c olsun")
	function squareFunction(square) {
		square.remove()
	}
	allSquare.forEach(squareFunction)

	for (column = 1; column <= getSize; column++) {
		//const columnContainer = document.createElement("div")
		// columnContainer.classList.add("column")
		// squareContainer.append(columnContainer)

		for (row = 1; row <= getSize; row++) {
			const square = document.createElement("div")
			square.classList.add("square")
            square.style.flexBasis=`calc(100% / ${getSize})`
            console.log(square.style.flexBasis)
			square.style.backgroundColor = "red"

			squareContainer.append(square)
		}
	}
}
