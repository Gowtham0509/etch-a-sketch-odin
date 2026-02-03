const container = document.querySelector(".container");
const header = document.querySelector(".getUserInput");
let grids = document.querySelectorAll(".grid-item");
const resetColorButton = document.querySelector(".resetColors");

function createGrids(size){
    for(let i = 1; i <= size * size; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add(`grid-item`);
        gridItem.dataset.opacity = 0;
        container.appendChild(gridItem);
    }
}

function initialGrid(){
    container.style.width = `${16 * 22}px`
    createGrids(16);
    grids = document.querySelectorAll(".grid-item");
    resetGridColors();
    handleColoring();
}


function newUserGrid(userInput){
    container.innerHTML = "";
    container.style.width = `${userInput * 22}px`;  
    createGrids(userInput);
    grids = document.querySelectorAll(".grid-item");
    handleColoring();
}

function handleColoring(){
    grids.forEach((grid) => {
    grid.addEventListener("mouseenter", (e) => {
        const [r, g, b] = randomColor();
        let currentOpacity = Number(grid.dataset.opacity);
        currentOpacity += 0.1
        if(currentOpacity > 1) currentOpacity = 1;
        grid.dataset.opacity = currentOpacity;
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        e.target.style.opacity = currentOpacity;
    });
});
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function resetGridColors(){
    grids.forEach((grid) => {
        grid.style.opacity = 1;
        grid.style.backgroundColor = "transparent";
        grid.dataset.opacity = 0;
        console.log(grid.className);
    });
}

header.addEventListener("click", () => {
    let userInput = Number(prompt("Enter the Grid size (Max 100): "));
    if(!Number.isInteger(userInput) || userInput <= 0 || userInput > 100){
        alert("Enter valid grid size between 1 to 100");
        return;
    }
    newUserGrid(userInput);
});

resetColorButton.addEventListener("click", () => {
    resetGridColors();
})


initialGrid();
