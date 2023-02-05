const gridLayoutSizes = [16 * 16, 24 * 24, 32 * 32, 64 * 64];
const gridContainer = document.querySelector(".grid-container");

const grid16 = document.createElement("div");
const grid24 = document.createElement("div");
const grid32 = document.createElement("div");
const grid64 = document.createElement("div");

const btn16 = document.querySelector(".sixteen-btn");
const btn24 = document.querySelector(".twentyfour-btn");
const btn32 = document.querySelector(".thirtytwo-btn");
const btn64 = document.querySelector(".sixtyfour-btn");
const clearBtn = document.querySelector(".clear-btn");
const colorPicker = document.getElementById("color-pick");

let previousGrid;

//Functions to create different size grids
function createGrid16() {
  if (previousGrid) {
    gridContainer.removeChild(previousGrid);
  }
  previousGrid = grid16;
  grid16.classList.add("grid16");
  gridContainer.appendChild(grid16);

  for (let cell = 0; cell < gridLayoutSizes[0]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid16.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = colorPicker.value;
    });

    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}
createGrid16();
btn16.disabled = true;

function createGrid24() {
  if (previousGrid) {
    gridContainer.removeChild(previousGrid);
  }
  previousGrid = grid24;
  grid24.classList.add("grid24");
  gridContainer.appendChild(grid24);

  for (let cell = 0; cell < gridLayoutSizes[1]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid24.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = colorPicker.value;
    });

    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

function createGrid32() {
  if (previousGrid) {
    gridContainer.removeChild(previousGrid);
  }
  previousGrid = grid32;
  grid32.classList.add("grid32");
  gridContainer.appendChild(grid32);

  for (let cell = 0; cell < gridLayoutSizes[2]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid32.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = colorPicker.value;
    });
    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

function createGrid64() {
  if (previousGrid) {
    gridContainer.removeChild(previousGrid);
  }
  previousGrid = grid64;
  grid64.classList.add("grid64");
  gridContainer.appendChild(grid64);

  for (let cell = 0; cell < gridLayoutSizes[3]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid64.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = colorPicker.value;
    });
    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

//Selection Buttons
btn16.addEventListener("click", () => {
  createGrid16();
  grid24.textContent = "";
  grid32.textContent = "";
  grid64.textContent = "";
  btn16.disabled = true;
  btn24.disabled = false;
  btn32.disabled = false;
  btn64.disabled = false;
});

btn24.addEventListener("click", () => {
  createGrid24();
  grid16.textContent = "";
  grid32.textContent = "";
  grid64.textContent = "";
  btn16.disabled = false;
  btn24.disabled = true;
  btn32.disabled = false;
  btn64.disabled = false;
});

btn32.addEventListener("click", () => {
  createGrid32();
  grid16.textContent = "";
  grid24.textContent = "";
  grid64.textContent = "";
  btn16.disabled = false;
  btn24.disabled = false;
  btn32.disabled = true;
  btn64.disabled = false;
});

btn64.addEventListener("click", () => {
  createGrid64();
  grid16.textContent = "";
  grid24.textContent = "";
  grid32.textContent = "";
  btn16.disabled = false;
  btn24.disabled = false;
  btn32.disabled = false;
  btn64.disabled = true;
});
