let container = document.querySelector("#container");
let grid_dimensions = 16;
const GRID_WIDTH = 840;

function setDimensions(){
    grid_dimensions = parseInt(prompt("Enter new side length between 0 and 100:"));
    if (grid_dimensions < 100 && grid_dimensions > 0){
        deleteOldGrid();
        createGrid(grid_dimensions);
    }
    else{
        alert("ERROR! Invalid input!")
    }
}

function deleteOldGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function createGrid(){
    for (let i = 1; i < grid_dimensions**2+1; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style["width"] = `${GRID_WIDTH/grid_dimensions}px`;
        square.style["height"] = `${GRID_WIDTH/grid_dimensions}px`;

        square.addEventListener("mouseover",() => {
            square.classList.add("draw");
        })

        container.appendChild(square);
    }
}

createGrid(grid_dimensions);