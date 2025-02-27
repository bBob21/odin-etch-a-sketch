let container = document.querySelector("#container");
const GRID_DIMENSIONS = 16;
const GRID_WIDTH = 840;

for (let i = 1; i < GRID_DIMENSIONS**2+1; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.style["width"] = `${GRID_WIDTH/GRID_DIMENSIONS}px`;
    square.style["height"] = `${GRID_WIDTH/GRID_DIMENSIONS}px`;

    square.addEventListener("mouseover",() => {
        square.classList.add("draw");
    })

    container.appendChild(square);
}

