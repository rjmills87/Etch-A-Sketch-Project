const gridContainer = document.querySelector(".grid-container");
const grid16by16 = 16 * 16;

function createGrid(size) {
  for (let cell = 0; cell < size; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridContainer.appendChild(gridCell);
  }
}
createGrid(grid16by16);
