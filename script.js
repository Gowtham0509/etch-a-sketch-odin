const container = document.querySelector(".container");
const header = document.querySelector(".user-input");

function initialGrid(){
    container.style.width = `${16 * 22}px`
    for(let i = 1; i <= 16 * 16; i++){
            const gridItem = document.createElement("div");
            gridItem.classList.add(`grid-item`);
            container.appendChild(gridItem);
    }
}



function newUserGrid(userInput){
    container.innerHTML = "";
    container.style.width = `${userInput * 22}px`;  
    for(let i = 1; i <= userInput * userInput; i++){
            const gridItem = document.createElement("div");
            gridItem.classList.add(`grid-item`);
            container.appendChild(gridItem);
        }
}

header.addEventListener("click", () => {
    let userInput = Number(prompt("Enter the Grid size (Max 100): "));
    if(!Number.isInteger(userInput) || userInput <= 0 || userInput > 100){
        alert("Enter valid grid size between 1 to 100");
        return;
    }
    newUserGrid(userInput);
});

initialGrid();
