function canMove(piece, from, to) {
  from = from.toUpperCase();
  to = to.toUpperCase();
  piece = piece.toUpperCase();
  if (from == to) return false;
  if (
    parseInt(to[1]) > 8 ||
    parseInt(from[1]) > 8 ||
    parseInt(to[1]) < 1 ||
    parseInt(from[1]) < 1
  )
    return false;
  if (piece == "KNIGHT") return canThisKnightMove(from, to);
  if (piece == "PAWN") return canThisPawnMove(from, to);
  if (piece == "ROOK") return canThisRookMove(from, to);
  if (piece == "BISHOP") return canThisBishopMove(from, to);
  return false;
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
  let status = 0;
  let indexStart = table.findIndex((e) => e == from[0]);
  let indexEnd = table.findIndex((e) => e == to[0]);
  if (indexStart == indexEnd) return false;
  console.log(indexStart, indexEnd);
  if (indexStart < indexEnd) {
    let j = 0;
    for (let i = indexStart; i < indexEnd + 1; i++) {
      console.log(table[i] + (parseInt(from[1]) + j));
      console.log(table[indexStart - j] + (parseInt(from[1]) - j));
      j++;
    }
  } else {
    let j = 0; // indexStart = 4 index End = 0
    for (let i = indexEnd; i < indexStart + 1; i++) {
      console.log(table[i] + (parseInt(to[1]) - j));
      // console.log(table[indexStart - j] + (parseInt(from[1]) - j));
      j++;
    }
  }
}
// console.log("Rook ", canMove("Rook", "a1", "C1")); //Rook valid move
// console.log("Rook ", canMove("Rook", "a1", "c8")); //Rook not valid move
// console.log("Pawn ", canMove("Pawn", "d2", "d4")); //Pawn 2 sqre move
// console.log("Pawn ", canMove("Pawn", "a3", "a5")); // Cant 2 sqre now
// console.log("Pawn ", canMove("Pawn", "a2", "a3")); // But you can move just 1 sqre
// console.log("Knight ", canMove("KNIGHT", "h4", "f5")); //knight valid move
console.log("Bishop ", canMove("Bishop", "e3", "a7")); //knight valid move
