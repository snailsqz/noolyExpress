const fs = require("fs");
let ChsTable = JSON.parse(fs.readFileSync("ctb.json"));
function canMove(piece, from, to) {
  from = from.toUpperCase();
  to = to.toUpperCase();
  piece = piece.toUpperCase();
  if (from == to) return `${piece} : from ${from} to ${to} = Can't Play`;
  if (
    parseInt(to[1]) > 8 ||
    parseInt(from[1]) > 8 ||
    parseInt(to[1]) < 1 ||
    parseInt(from[1]) < 1
  )
    return `${piece} : from ${from} to ${to} = Can't Play`;
  if (piece == "PAWN")
    return `${piece} : from ${from} to ${to} = ${canThisPawnMove(from, to)}`;
  if (piece == "ROOK")
    return `${piece} : from ${from} to ${to} = ${canThisRookMove(from, to)}`;
  if (piece == "KNIGHT")
    return `${piece} : from ${from} to ${to} = ${canThisKnightMove(from, to)}`;
  if (piece == "BISHOP")
    return `${piece} : from ${from} to ${to} = ${canThisBishopMove(from, to)}`;
  if (piece == "QUEEN")
    return `${piece} : from ${from} to ${to} = ${canThisQueenMove(from, to)}`;
  if (piece == "KING")
    return `${piece} : from ${from} to ${to} = ${canThisKingMove(from, to)}`;

  return `${piece} : from ${from} to ${to} = Can't Play`;
}
function ShowDisplay() {
  let op = "";
  console.log("\n");
  for (let i = 0; i < ChsTable.length; i++) {
    op += 8 - i + " : ";
    for (let j = 0; j < ChsTable[i].length; j++) {
      op += ChsTable[i][j];
    }
    op += "\n";
  }
  op += "Col:ABCDEFGH";
  return op;
}
function ChessTable(piece, from) {
  from = from.toUpperCase();
  piece = piece.toUpperCase();
  // if (piece != "PAWN") return false;
  // if (piece != "ROOK") return false;
  // if (piece != "KNIGHT") return false;
  // if (piece != "BISHOP") return false;
  // if (piece != "QUEEN") return false;
  // if (piece != "KING") return false;
  let row = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let indexStart = row.findIndex((e) => e == from[0]);
  ChsTable[8 - parseInt(from[1])][indexStart] = piece[0];
  fs.writeFileSync("ctb.json", JSON.stringify(ChsTable));
  return ShowDisplay();
}
function canThisPawnMove(from, to) {
  if (
    parseInt(from[1]) == 2 &&
    from[0] == to[0] &&
    parseInt(from[1]) + 2 == to[1]
  ) {
    return true;
  }
  if (from[0] == to[0] && parseInt(from[1]) + 1 == parseInt(to[1])) return true;
  return false;
}
function canThisRookMove(from, to) {
  if (from[1] == to[1] || from[0] == to[0]) return true;
  return false;
}
function canThisKnightMove(from, to) {
  table = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let status = 0;
  let indexStart = table.findIndex((e) => e == from[0]);
  let indexEnd = table.findIndex((e) => e == to[0]);
  if (indexStart == indexEnd) return false;

  for (let i = -2; i <= 2; i++)
    if (table[indexStart - i] == table[indexEnd]) status = 1; //check if element around indexStart each side +-2

  if (status == 1)
    for (let i = -2; i <= 2; i++)
      if (parseInt(from[1]) - i == parseInt(to[1])) status = 2;

  if (status == 2) {
    for (let i = -2; i <= 2; i++) {
      if ((i == -2 || i == 2) && indexStart - i == indexEnd) {
        if (
          parseInt(from[1]) - parseInt(to[1]) == -1 ||
          parseInt(from[1]) - parseInt(to[1]) == 1
        )
          return true;
      }
      if ((i == -1 || i == 1) && indexStart - i == indexEnd) {
        if (
          parseInt(from[1]) - parseInt(to[1]) == -2 ||
          parseInt(from[1]) - parseInt(to[1]) == 2
        )
          return true;
      }
    }
  }
  return false;
}
function canThisBishopMove(from, to) {
  table = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let indexStart = table.findIndex((e) => e == from[0]);
  let indexEnd = table.findIndex((e) => e == to[0]);
  if (indexStart == indexEnd) return false;
  let j = 1;
  if (indexStart < indexEnd)
    for (let i = indexStart; i < 9; i++) {
      if (table[indexStart - j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart + j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart - j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart + j] + (parseInt(from[1]) + j) == to) return true;

      j++;
    }
  else {
    for (let i = indexStart; i > 0; i--) {
      if (table[indexStart - j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart + j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart - j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart + j] + (parseInt(from[1]) + j) == to) return true;
      j++;
    }
  }
  return false;
}
function canThisQueenMove(from, to) {
  if (from[1] == to[1] || from[0] == to[0]) return true;
  table = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let indexStart = table.findIndex((e) => e == from[0]);
  let indexEnd = table.findIndex((e) => e == to[0]);
  if (indexStart == indexEnd) return false;
  let j = 1;
  if (indexStart < indexEnd)
    for (let i = indexStart; i < 9; i++) {
      if (table[indexStart - j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart + j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart - j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart + j] + (parseInt(from[1]) + j) == to) return true;

      j++;
    }
  else {
    for (let i = indexStart; i > 0; i--) {
      if (table[indexStart - j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) - j > 0)
        if (table[indexStart + j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart - j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart - j] + (parseInt(from[1]) - j) == to) return true;

      if (table[indexStart + j] != undefined && parseInt(from[1]) + j < 9)
        if (table[indexStart + j] + (parseInt(from[1]) + j) == to) return true;
      j++;
    }
  }
  return false;
}
function canThisKingMove(from, to) {
  table = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let indexStart = table.findIndex((e) => e == from[0]);
  let indexEnd = table.findIndex((e) => e == to[0]);

  for (let i = -1; i <= 1; i++)
    if (
      indexStart - i == indexEnd &&
      parseInt(from[1]) - parseInt(to[1]) > -2 &&
      parseInt(from[1]) - parseInt(to[1]) < 3
    )
      return true;

  return false;
}
// console.log(canMove("Rook", "a1", "C1")); //Rook valid move
// console.log(canMove("Rook", "a1", "c8")); //Rook invalid move
// console.log(canMove("Pawn", "d2", "d4")); //Pawn 2 sqre move
// console.log(canMove("Pawn", "a3", "a5")); // Cant 2 sqre now
// console.log(canMove("Pawn", "a2", "a3")); // But you can move just 1 sqre
// console.log(canMove("Knight", "e4", "d2")); //knight valid move
// console.log(canMove("Knight", "e4", "d1")); //knight invalid move
// console.log(canMove("Bishop", "e4", "h1")); //Bishop valid move
// console.log(canMove("Bishop", "e4", "h2")); //Bishop invalid move
// console.log(canMove("Queen", "d5", "h1")); //Queen valid move
// console.log(canMove("Queen", "d5", "c3")); //Queen invalid move
// console.log(canMove("King", "f3", "g3")); //King valid move
// console.log(canMove("King", "d3", "f3")); //King invalid move

let row = ["A", "B", "C", "D", "E", "F", "G", "H"];
// for (let i = 0; i < 8; i++) {
//   ChessTable("Pawn", row[i] + 2);
// }
// ChessTable("Rook", "a1");
// ChessTable("Rook", "h1");
// ChessTable("Night", "b1");
// ChessTable("Night", "g1");
// ChessTable("Bishop", "c1");
// ChessTable("Bishop", "f1");
// ChessTable("Queen", "d1");
// console.log(ChessTable("Queen", "d3"));
console.log(ShowDisplay());
