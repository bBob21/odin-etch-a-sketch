let container = document.querySelector("#container");
const dimensions = 16;
for (let i = 1; i < dimensions**2+1; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.textContent = i;
    square.style["width"] = `${840/16}px`;
    square.style["height"] = `${840/16}px`;
    container.appendChild(square);
}