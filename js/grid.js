export { createGameArray };

const colSize = 10;
const rowsSize = 20;

const containerSelector = document.querySelector("#tetris-grid");

//Create the grid with divs
function createGameArray() {
  var number = colSize * rowsSize;
  for (var i = 0; i < number; i++) {
    containerSelector.innerHTML += `<div class="grid-block"></div>`;
  }
}
