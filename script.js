const gridContainer = document.querySelector(".grid-container");
const grid16 = document.createElement("div");
const grid24 = document.createElement("div");
const grid32 = document.createElement("div");
const gridLayoutSizes = [16 * 16, 24 * 24, 32 * 32];

const btn16 = document.querySelector(".sixteen-btn");
const btn24 = document.querySelector(".twentyfour-btn");
const btn32 = document.querySelector(".thirtytwo-btn");
const clearBtn = document.querySelector("#clear-btn");

function createGrid16() {
  grid16.classList.add("grid16");
  gridContainer.appendChild(grid16);

  for (let cell = 0; cell < gridLayoutSizes[0]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid16.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = "blue";
    });

    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

function createGrid24() {
  grid24.classList.add("grid24");
  gridContainer.appendChild(grid24);

  for (let cell = 0; cell < gridLayoutSizes[1]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid24.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = "red";
    });

    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

function createGrid32() {
  grid32.classList.add("grid32");
  gridContainer.appendChild(grid32);

  for (let cell = 0; cell < gridLayoutSizes[2]; cell++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    grid32.appendChild(gridCell);
    gridCell.addEventListener("mouseover", function () {
      gridCell.style.backgroundColor = "green";
    });
    clearBtn.addEventListener("click", function () {
      gridCell.style.backgroundColor = "white";
    });
  }
}

btn16.addEventListener("click", () => {
  createGrid16();
});

btn24.addEventListener("click", () => {
  createGrid24();
});

btn32.addEventListener("click", () => {
  createGrid32();
});
