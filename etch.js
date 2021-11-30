const createGrid = (boxes) => {
    for (let i = 0; i < boxes; i++) {
        const newGridSquare = document.createElement('div'); 
        container.appendChild(newGridSquare);
        newGridSquare.setAttribute("class", "grid-square");
        newGridSquare.addEventListener("mouseover", () => {
            newGridSquare.style.backgroundColor="black";
        });
    }
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
    let userInput = prompt("Enter a number from 1-100 to generate a new grid.");
    newGridDimensions = userInput*userInput; 
    createGrid(newGridDimensions);
}

const resetButton = document.querySelector('button');
resetButton.addEventListener("click", () => resetGrid());    
