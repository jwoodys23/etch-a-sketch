const gridSize = 16;


const container = document.querySelector(".container");
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

function createGrid() {

}

for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "grid";
    container.appendChild(newDiv);
}

