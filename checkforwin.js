
function checkforwin() {
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
        return alert(`${moves[r1][c1]} wins`);
      }
    }
    return null;
  }