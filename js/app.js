import { createGameArray } from "./grid.js";
import { tetrominoes } from "./tetrominoes.js";

createGameArray();
const scoreSelector = document.querySelector("#score");
const blockSelector = Array.from(document.querySelectorAll(".grid-block"));

let currentPosition = 2;
let randomTetromino =
  tetrominoes[Math.floor(Math.random() * tetrominoes.length)][
    Math.floor(Math.random() * (tetrominoes.length - 1))
  ];

function draw() {
  randomTetromino.forEach((index) => {
    blockSelector[currentPosition + index].classList.add("tetromino");
  });
}

draw();
