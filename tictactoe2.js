// script for two players and Computer
//  Code still needs some refactoring though

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

const alertt = document.querySelector(".alert");

// getting value from button pressed
let computerPlaying = false;
let player1 = true;
// let value = '';

function aiPlay() {
    if (computerPlaying === true) {
      generateComputerMove();
      alertt.innerHTML = `ai turn`;
    }
  }

function displayMessage(){
    if (value === 'X'){
      alertt.innerHTML = `O turn`;
      console.log('X turn');
    } else if (value === 'O'){
      alertt.innerHTML = `X turn`;
      console.log('x turn');
    }
  }

firstRow1.addEventListener("click", () => {
  if (
    moves.firstRow[0] !== "X" &&
    moves.firstRow[0] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.firstRow[0] = value;
    firstRow1.innerHTML = value;
    player1 = false;
  } else if (
    moves.firstRow[0] !== "X" &&
    moves.firstRow[0] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.firstRow[0] = value;
    firstRow1.innerHTML = value;
    player1 = true;
  };
  displayMessage();
  aiPlay();
  console.log(player1);
  console.log("First Row");
  console.log(moves.firstRow);
  checkForWin1();
});

firstRow2.addEventListener("click", () => {
  if (
    moves.firstRow[1] !== "X" &&
    moves.firstRow[1] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.firstRow[1] = value;
    firstRow2.innerHTML = value;
    player1 = true;
  } else if (
    moves.firstRow[1] !== "X" &&
    moves.firstRow[1] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.firstRow[1] = value;
    firstRow2.innerHTML = value;
    player1 = false;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log(player1);
  console.log("First Row");
  console.log(moves.firstRow);
});

firstRow3.addEventListener("click", () => {
  if (
    moves.firstRow[2] !== "X" &&
    moves.firstRow[2] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.firstRow[2] = value;
    firstRow3.innerHTML = value;
    player1 = false;
  } else if (
    moves.firstRow[2] !== "X" &&
    moves.firstRow[2] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.firstRow[2] = value;
    firstRow3.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log(player1);
  console.log("First Row");
  console.log(moves.firstRow);
});

// second row
secondRow1.addEventListener("click", () => {
  if (
    moves.secondRow[0] !== "X" &&
    moves.secondRow[0] !== "O" &&
    player1 == true
  ) {
    value = "X";
    moves.secondRow[0] = value;
    secondRow1.innerHTML = value;
    player1 = false;
  } else if (
    moves.secondRow[0] !== "X" &&
    moves.secondRow[0] !== "O" &&
    player1 == false
  ) {
    value = "O";
    moves.secondRow[0] = value;
    secondRow1.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Second Row");
  console.log(moves.secondRow);
});

secondRow2.addEventListener("click", () => {
  if (
    moves.secondRow[1] !== "X" &&
    moves.secondRow[1] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.secondRow[1] = value;
    secondRow2.innerHTML = value;
    player1 = false;
  } else if (
    moves.secondRow[1] !== "X" &&
    moves.secondRow[1] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.secondRow[1] = value;
    secondRow2.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Second Row");
  console.log(moves.secondRow);
});

secondRow3.addEventListener("click", () => {
  if (
    moves.secondRow[2] !== "X" &&
    moves.secondRow[2] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.secondRow[2] = value;
    secondRow3.innerHTML = value;
    player1 = false;
  } else if (
    moves.secondRow[2] !== "X" &&
    moves.secondRow[2] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.secondRow[2] = value;
    secondRow3.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Second Row");
  console.log(moves.secondRow);
});

// Third row

thirdRow1.addEventListener("click", () => {
  if (
    moves.thirdRow[0] !== "X" &&
    moves.thirdRow[0] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.thirdRow[0] = value;
    thirdRow1.innerHTML = value;
    player1 = false;
  } else if (
    moves.thirdRow[0] !== "X" &&
    moves.thirdRow[0] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.thirdRow[0] = value;
    thirdRow1.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Third Row");
  console.log(moves.thirdRow);
});

thirdRow2.addEventListener("click", () => {
  if (
    moves.thirdRow[1] !== "X" &&
    moves.thirdRow[1] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.thirdRow[1] = value;
    thirdRow2.innerHTML = value;
    player1 = false;
  } else if (
    moves.thirdRow[1] !== "X" &&
    moves.thirdRow[1] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.thirdRow[1] = value;
    thirdRow2.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Third Row");
  console.log(moves.thirdRow);
});

thirdRow3.addEventListener("click", () => {
  if (
    moves.thirdRow[2] !== "X" &&
    moves.thirdRow[2] !== "O" &&
    player1 === true
  ) {
    value = "X";
    moves.thirdRow[2] = value;
    thirdRow3.innerHTML = value;
    player1 = false;
  } else if (
    moves.thirdRow[2] !== "X" &&
    moves.thirdRow[2] !== "O" &&
    player1 === false
  ) {
    value = "O";
    moves.thirdRow[2] = value;
    thirdRow3.innerHTML = value;
    player1 = true;
  }
  displayMessage();
  aiPlay();
  checkForWin1();
  console.log("Third Row");
  console.log(moves.thirdRow);
});

let score = JSON.parse(localStorage.getItem("scores")) || {
  X: 0,
  O: 0,
};

document.querySelector(
  ".sccoress"
).innerHTML = `Player X : ${score.X}  -  PLayer O : ${score.O}`;

function saveScoresToLocalStorage() {
  localStorage.setItem("scores", JSON.stringify(score));
  updateScoresOnPage();
}

function updateScoresOnPage() {
  document.querySelector(
    ".sccoress"
  ).innerHTML = `Player X : ${score.X} - Player O : ${score.O}`;
}

function checkForWin1() {
  const possibleWins = [
    // horizontal wins
    ["firstRow", 0, "firstRow", 1, "firstRow", 2],
    ["secondRow", 0, "secondRow", 1, "secondRow", 2],
    ["thirdRow", 0, "thirdRow", 1, "thirdRow", 2],
    // vertical wins
    ["firstRow", 0, "secondRow", 0, "thirdRow", 0],
    ["firstRow", 1, "secondRow", 1, "thirdRow", 1],
    ["firstRow", 2, "secondRow", 2, "thirdRow", 2],
    // diagonal wins
    ["firstRow", 0, "secondRow", 1, "thirdRow", 2],
    ["firstRow", 2, "secondRow", 1, "thirdRow", 0],
  ];

  for (let i = 0; i < possibleWins.length; i++) {
    const [r1, c1, r2, c2, r3, c3] = possibleWins[i];
    if (
      moves[r1][c1] &&
      moves[r1][c1] === moves[r2][c2] &&
      moves[r1][c1] === moves[r3][c3]
    ) {
      if (moves[r1][c1] === "X") {
        score.X += 1;
        saveScoresToLocalStorage();
      } else if (moves[r1][c1] === "O") {
        score.O += 1;
        saveScoresToLocalStorage();
      }
      setTimeout(() => {
        (document.querySelector(
          ".alert"
        ).innerHTML = `${moves[r1][c1]} wins!`);  
        setTimeout(() => {
         newgame();
        }, 2000);
      }, 0);
      
    }
  }

  if (
    moves["firstRow"][0] &&
    moves["firstRow"][1] &&
    moves["firstRow"][2] &&
    moves["secondRow"][0] &&
    moves["secondRow"][1] &&
    moves["secondRow"][2] &&
    moves["thirdRow"][0] &&
    moves["thirdRow"][1] &&
    moves["thirdRow"][2]
  ) {
    setTimeout(() => {
      (document.querySelector(
        ".alert"
      ).innerHTML = `Tie Game`);  
      setTimeout(() => {
       newgame();
      }, 2000);
    }, 0);
  }

  return null;
}

function newgame() {
  for (let i = 0; i < moves.firstRow.length; i++) {
    moves.firstRow[i] = "";
  }
  for (let i = 0; i < moves.secondRow.length; i++) {
    moves.secondRow[i] = "";
  }
  for (let i = 0; i < moves.thirdRow.length; i++) {
    moves.thirdRow[i] = "";
  }

  firstRow1.innerHTML = "";
  firstRow2.innerHTML = "";
  firstRow3.innerHTML = "";
  secondRow1.innerHTML = "";
  secondRow2.innerHTML = "";
  secondRow3.innerHTML = "";
  thirdRow1.innerHTML = "";
  thirdRow2.innerHTML = "";
  thirdRow3.innerHTML = "";

  setTimeout(() => {
    document.querySelector(".alert").innerHTML = `New Game!`;
    setTimeout(() => {
      document.querySelector(".alert").innerHTML = "";
    }, 2000);
  }, 10);

  // reset player turn
  player1 = true;
}

document.querySelector(".new-game").addEventListener("click", () => newgame());

function resetscore() {
  score = {
    X: 0,
    O: 0,
  };
  setTimeout(() => {
    document.querySelector(".alert").innerHTML = `Score has been reset`;
    setTimeout(() => {
      document.querySelector(".alert").innerHTML = "";
    }, 2000);
  }, 10);
  saveScoresToLocalStorage();
  updateScoresOnPage();
}

document
  .querySelector(".reset-score")
  .addEventListener("click", () => resetscore());

function generateComputerMove() {
  setTimeout(() => {
    const rows = ["firstRow", "secondRow", "thirdRow"];
    let randomRow = rows[Math.floor(Math.random() * rows.length)];
    let randomIndex = Math.floor(Math.random() * 3);
    while (
      moves[randomRow][randomIndex] === "X" ||
      moves[randomRow][randomIndex] === "O"
    ) {
      randomRow = rows[Math.floor(Math.random() * rows.length)];
      randomIndex = Math.floor(Math.random() * 3);
    }
    if (player1 === false) {
      moves[randomRow][randomIndex] = "O";
      checkForWin1();
      updateScreen();
    }
    player1 = true;
    alertt.innerHTML = `Human turn`;

    console.log(randomIndex, randomRow);
    console.log(moves[randomRow]);
  }, 2000);
}

function playwithComputer() {
  computerPlaying = true;
  alertt.innerHTML = `now Playing With Ai`;
}

document
  .querySelector(".play-with-computer")
  .addEventListener("click", () => playwithComputer());

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
}

document
  .querySelector(".play-with-computer")
  .addEventListener("click", () => generateComputerMove());
