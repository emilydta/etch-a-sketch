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
    let gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(gridSquare => { 
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor=`${randomiseColors()}`;
            });
        });
    colorButton.innerText="Black";
    colorButton.removeEventListener("click", colorSquares);
    colorButton.addEventListener("click", blackSquares);
};

function blackSquares() {
    let gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach(gridSquare => { 
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor="black";
            });
        });
    colorButton.innerText="Color";
    colorButton.removeEventListener("click", blackSquares);
    colorButton.addEventListener("click", colorSquares);
}

resetButton.addEventListener("click", () => resetGrid());
    



