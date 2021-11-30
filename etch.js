for (let i = 0; i < 256; i++) {
    const newGridSquare = document.createElement('div'); 
    container.appendChild(newGridSquare);
    newGridSquare.setAttribute("class", "grid-square");
}

let gridSquares = document.querySelectorAll(".grid-square");
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", ()=>{
        gridSquare.style.backgroundColor="black";
    });
 });

const resetButton = document.createElement('button');



function resetGrid() {
    gridSquares.forEach(gridSquare => {
        gridSquare.remove();
    });
    let userInput = prompt("Enter a number from 1-100 to generate a new grid.");
    newGridDimensions = userInput*userInput; 

    for (let i = 0; i < newGridDimensions; i++) {
        let gridSquares = document.querySelectorAll(".grid-square");
        const newGridSquare = document.createElement('div'); 
        container.appendChild(newGridSquare);
        newGridSquare.setAttribute("class", "grid-square");
        newGridSquare.addEventListener("mouseover", ()=>{
            newGridSquare.style.backgroundColor="black"
        });
    };
};



resetButton.addEventListener("click", () => resetGrid());    




