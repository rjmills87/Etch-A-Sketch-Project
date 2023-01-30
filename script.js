const gridContainer = document.querySelector(".grid-container");
const gridLayoutSizes = [16 * 16, 24 * 24, 32 * 32];

for (let cell = 0; cell < gridLayoutSizes[0]; cell++) {
  let gridCell = document.createElement("div");
  gridCell.classList.add("gridCell");
  gridContainer.appendChild(gridCell);
  gridCell.addEventListener("mouseover", function () {
    gridCell.style.backgroundColor = "blue";
  });

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", function () {
    gridCell.style.backgroundColor = "white";
  });
}
