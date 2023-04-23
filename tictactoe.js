// script for computer

// using 3 arrays to store the moves
let moves = {
  firstRow: [],
  secondRow: [],
  thirdRow: [],
};

// dom elements
const firstRow1 = document.querySelector(".top-left");
const firstRow2 = document.querySelector(".top-middle");
const firstRow3 = document.querySelector(".top-right");
const secondRow1 = document.querySelector(".middle-left");
const secondRow2 = document.querySelector(".middle-middle");
const secondRow3 = document.querySelector(".middle-right");
const thirdRow1 = document.querySelector(".bottom-left");
const thirdRow2 = document.querySelector(".bottom-middle");
const thirdRow3 = document.querySelector(".bottom-right");

// getting value from button pressed
let value = "";

// event listeners
// first row
// player 1

let player1 = true;

firstRow1.addEventListener("click", () => {
  if (moves.firstRow[0] !== "X" && moves.firstRow[0] !== "O" && player1 === true) {
    value = "X";
    moves.firstRow[0] = value;
    firstRow1.innerHTML = value;
    generateComputerMove();
    updateScreen();
    player1 = false;
  }

  console.log("First Row");
  console.log(moves.firstRow);
});

firstRow2.addEventListener("click", () => {
  if (moves.firstRow[1] !== "X" && moves.firstRow[1] !== "O") {
    value = "X";
    moves.firstRow[1] = value;
    firstRow2.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("First Row");
  console.log(moves.firstRow);
});

firstRow3.addEventListener("click", () => {
  if (moves.firstRow[2] !== "X" && moves.firstRow[2] !== "O") {
    value = "X";
    moves.firstRow[2] = value;
    firstRow3.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("First Row");
  console.log(moves.firstRow);
});

// second row
secondRow1.addEventListener("click", () => {
  if (moves.secondRow[0] !== "X" && moves.secondRow[0] !== "O") {
    value = "X";
    moves.secondRow[0] = value;
    secondRow1.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Second Row");
  console.log(moves.secondRow);
});

secondRow2.addEventListener("click", () => {
  if (moves.secondRow[1] !== "X" && moves.secondRow[1] !== "O") {
    value = "X";
    moves.secondRow[1] = value;
    secondRow2.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Second Row");
  console.log(moves.secondRow);
});

secondRow3.addEventListener("click", () => {
  if (moves.secondRow[2] !== "X" && moves.secondRow[2] !== "O") {
    value = "X";
    moves.secondRow[2] = value;
    secondRow3.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Second Row");
  console.log(moves.secondRow);
});

// Third row

thirdRow1.addEventListener("click", () => {
  if (moves.thirdRow[0] !== "X" && moves.thirdRow[0] !== "O") {
    value = "X";
    moves.thirdRow[0] = value;
    thirdRow1.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Third Row");
  console.log(moves.thirdRow);
});

thirdRow2.addEventListener("click", () => {
  if (moves.thirdRow[1] !== "X" && moves.thirdRow[1] !== "O") {
    value = "X";
    moves.thirdRow[1] = value;
    thirdRow2.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Third Row");
  console.log(moves.thirdRow);
});

thirdRow3.addEventListener("click", () => {
  if (moves.thirdRow[2] !== "X" && moves.thirdRow[2] !== "O") {
    value = "X";
    moves.thirdRow[2] = value;
    thirdRow3.innerHTML = value;
    generateComputerMove();
    updateScreen();
  }
  console.log("Third Row");
  console.log(moves.thirdRow);
});

// Update to screen
function updateScreen() {
  firstRow1.innerHTML = moves.firstRow[0] || "";
  firstRow2.innerHTML = moves.firstRow[1] || "";
  firstRow3.innerHTML = moves.firstRow[2] || "";
  secondRow1.innerHTML = moves.secondRow[0] || "";
  secondRow2.innerHTML = moves.secondRow[1] || "";
  secondRow3.innerHTML = moves.secondRow[2] || "";
  thirdRow1.innerHTML = moves.thirdRow[0] || "";
  thirdRow2.innerHTML = moves.thirdRow[1] || "";
  thirdRow3.innerHTML = moves.thirdRow[2] || "";

  let result = checkForWin();
  if (result === "tie") {
    alert("Tie game!");
  } else if (result) {
    alert(result + " wins!");
  }
}

const rows = ["firstRow", "secondRow", "thirdRow"];
let randomRow = rows[Math.floor(Math.random() * rows.length)];
let randomIndex = Math.floor(Math.random() * 3);

function generateComputerMove() {
  while (
    moves[randomRow][randomIndex] === "X" ||
    moves[randomRow][randomIndex] === "O"
  ) {
    randomRow = rows[Math.floor(Math.random() * rows.length)];
    randomIndex = Math.floor(Math.random() * 3);
  }
  moves[randomRow][randomIndex] = "O";
  console.log(randomIndex, randomRow);
  console.log(moves[randomRow]);
}


// Check for win, loss, or tie
function checkForWin() {
  // Check for horizontal win
  for (let row in moves) {
    if (
      moves[row][0] &&
      moves[row][0] === moves[row][1] &&
      moves[row][1] === moves[row][2]
    ) {
      return moves[row][0];
    }
  }

  // Check for vertical win
  for (let i = 0; i < 3; i++) {
    if (
      moves.firstRow[i] &&
      moves.firstRow[i] === moves.secondRow[i] &&
      moves.secondRow[i] === moves.thirdRow[i]
    ) {
      return moves.firstRow[i];
    }
  }

  // Check for diagonal win
  if (
    moves.firstRow[0] &&
    moves.firstRow[0] === moves.secondRow[1] &&
    moves.secondRow[1] === moves.thirdRow[2]
  ) {
    return moves.firstRow[0];
  }
  if (
    moves.firstRow[2] &&
    moves.firstRow[2] === moves.secondRow[1] &&
    moves.secondRow[1] === moves.thirdRow[0]
  ) {
    return moves.firstRow[2];
  }

  // Check for tie
  for (let row in moves) {
    for (let i = 0; i < 3; i++) {
      if (!moves[row][i]) {
        return null; // game still in progress
      }
    }
  }
  return "tie"; // all spaces filled, no winner
}


// second player

