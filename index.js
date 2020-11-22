const col = 10;
const rows = 24;
const container = document.querySelector("#tetris-grid");
const score = document.querySelector("#score");

function createGameArray() {
  var number = col * rows;
  for (var i = 0; i < number; i++) {
    container.innerHTML += `<div class="grid-block"></div>`;
  }
}
createGameArray();

const blocks = document.querySelectorAll(".grid-block");

console.log(blocks);
