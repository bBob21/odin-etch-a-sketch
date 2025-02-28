let container = document.querySelector("#container");
let grid_dimensions = 16;
const GRID_WIDTH = 840;
let randomColor = false;
let trailEffect = false;
let trailRate = 0.02; // 20 units long


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

function createGrid(grid_dimensions){
    for (let i = 1; i < grid_dimensions**2+1; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style["width"] = `${GRID_WIDTH/grid_dimensions}px`;
        square.style["height"] = `${GRID_WIDTH/grid_dimensions}px`;
        square.style["opacity"] = "1";

        square.addEventListener("mouseover",() => {
            square.classList.add("drawn");
            square.style["opacity"] = "1"
            if (randomColor){
                let R = Math.floor(Math.random()*257);
                let G = Math.floor(Math.random()*257);
                let B = Math.floor(Math.random()*257);
                square.style["background-color"] = `rgb(${R},${G},${B})`;
            }
            else
                square.style["background-color"] = "black";
            

            if (trailEffect){
                let allDrawnSquares = document.querySelectorAll(".drawn");
                allDrawnSquares.forEach((s) => {
                    let opacity = parseFloat(s.style["opacity"]);
                    opacity -= trailRate;
                    if (opacity <= 0.01){ // avoid tiny opacity such as 0.0001 since its almost 0
                        s.classList.remove("drawn");
                        s.style["opacity"] = "1";
                        s.style.removeProperty("background-color");
                    }
                    else
                        s.style["opacity"] = opacity;
                        console.log(opacity);
                });
            }
        });

        container.appendChild(square);
    }
}

function toggleRandomColor(){
    let status;
    randomColor = !randomColor;
    if (randomColor)
        status = "on";
    else
        status = "off";
    document.querySelector(".button-random-color").textContent = `Random color: ${status}`;
}

function toggleTrailEffect(){
    let status;

    trailEffect = !trailEffect;
    if (trailEffect){
        status = "on";
        trailRate = 1/(1+parseInt(prompt("Enter length of trail:")));
    }
    else
        status = "off";
    document.querySelector(".button-trail-effect").textContent = `Trail effect: ${status}`;
}

createGrid(grid_dimensions);