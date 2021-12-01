const errorMessage = document.getElementById("error-message");
const resetButton = document.getElementById('reset-button');
const colorButton = document.getElementById('color-button');
const errorText = document.createElement('p');

function createGrid(boxes) {
    for (let i = 0; i < boxes; i++) {
        let columns = Math.sqrt(boxes);
        let rows = Math.sqrt(boxes);
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        const newGridSquare = document.createElement('div');
        container.appendChild(newGridSquare);
        newGridSquare.setAttribute("class", "grid-square");

    };
    //this function was firing inside a loop, so it was firing 256 times to start. Moved it outside the loop.
    blackSquares();
};

createGrid(256);

function removeSquares() {
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => {
        gridSquare.remove();
    });
}

function resetGrid() {
    removeSquares();
    let userInput = prompt("Enter a number from 2-100 to generate a new grid.");
    if (userInput > 100 || userInput < 2){
        errorMessage.appendChild(errorText);
        errorText.innerText = "You did not choose a number between 2-100. Please try again."
    } else {
        errorText.remove();
        newGridDimensions = userInput*userInput;
        createGrid(newGridDimensions);
    }
};

function randomiseColors() {
    const colorArray = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF"];
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        return randomColor;
}

function colorSquares() {
    // put this here so that I could watch everytime the function was being fired. Encourage you to put these console.logs in your current code and see whats happening
    console.log('fired color')
    let gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(gridSquare => {
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor=`${randomiseColors()}`;
            });
        });
    colorButton.innerText="Black";
    // Need to add a removeEventListnere because otherwise the event listener was being carried over everytime colorSquares() or blackSquares() were being called.
    colorButton.removeEventListener("click", colorSquares);
    // Did not need a callback here. Just simply reference the function like below. (before you were doing colorButton.addEventListener("click", () => blackSquares())) You didnt need that, as it was not making us able to remove the eventListener
    colorButton.addEventListener("click", blackSquares);
};

function blackSquares() {
    // put this here so that I could watch everytime the function was being fired. Encourage you to put these console.logs in your current code and see whats happening
    console.log('fired black')
    let gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(gridSquare => {
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor="black";
            });
        });
    colorButton.innerText="Color";
    // Need to add a removeEventListnere because otherwise the event listener was being carried over everytime colorSquares() or blackSquares() were being called.
    colorButton.removeEventListener("click", blackSquares);
     // Did not need a callback here. Just simply reference the function like below. (before you were doing colorButton.addEventListener("click", () => blackSquares())) You didnt need that, as it was not making us able to remove the eventListener
    colorButton.addEventListener("click", colorSquares);
}

resetButton.addEventListener("click", () => resetGrid());
// did not need to set thsi here, as it was being set when you first call blackSqures() on line 18.
// colorButton.addEventListener("click", () => colorSquares());