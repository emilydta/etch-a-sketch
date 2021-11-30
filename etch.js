const errorMessage = document.getElementById("error-message");
const resetButton = document.querySelector('button');
const errorText = document.createElement('p');

const createGrid = (boxes) => {
    for (let i = 0; i < boxes; i++) {
        let columns = Math.sqrt(boxes);
        let rows = Math.sqrt(boxes);
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        const newGridSquare = document.createElement('div'); 
        container.appendChild(newGridSquare);
        newGridSquare.setAttribute("class", "grid-square");
        newGridSquare.addEventListener("mouseover", () => {
            newGridSquare.style.backgroundColor="black";
        });
    };
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

resetButton.addEventListener("click", () => resetGrid());    



