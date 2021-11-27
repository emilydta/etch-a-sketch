for (let i = 0; i < 256; i++) {
    const newGridSquare = document.createElement('div'); 
    container.appendChild(newGridSquare);
    newGridSquare.setAttribute("class", "grid-square");
}

const gridSquares = document.querySelectorAll(".grid-square");
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", ()=>{
        gridSquare.style.backgroundColor="black";
    });
 });
    



