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
    let gridCell16 = document.createElement("div");
    gridCell16.classList.add("gridCell16");
    grid16.appendChild(gridCell16);
    gridCell16.addEventListener("mouseover", function () {
      gridCell16.style.backgroundColor = "blue";
    });

    clearBtn.addEventListener("click", function () {
      gridCell16.style.backgroundColor = "white";
    });
  }
}

function createGrid24() {
  grid24.classList.add("grid24");
  gridContainer.appendChild(grid24);

  for (let cell = 0; cell < gridLayoutSizes[1]; cell++) {
    let gridCell24 = document.createElement("div");
    gridCell24.classList.add("gridCell24");
    grid24.appendChild(gridCell24);
    gridCell24.addEventListener("mouseover", function () {
      gridCell24.style.backgroundColor = "blue";
    });

    clearBtn.addEventListener("click", function () {
      gridCell24.style.backgroundColor = "white";
    });
  }
}

function createGrid32() {
  grid32.classList.add("grid32");
  gridContainer.appendChild(grid32);

  for (let cell = 0; cell < gridLayoutSizes[2]; cell++) {
    let gridCell32 = document.createElement("div");
    gridCell32.classList.add("gridCell32");
    grid32.appendChild(gridCell32);
    gridCell32.addEventListener("mouseover", function () {
      gridCell32.style.backgroundColor = "blue";
    });

    clearBtn.addEventListener("click", function () {
      gridCell32.style.backgroundColor = "white";
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
