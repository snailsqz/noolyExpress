let pawnMoved = false;
function canMove(piece, from, to) {
  from = from.toUpperCase();
  to = to.toUpperCase();
  piece = piece.toUpperCase();

  table = ["A", "B", "C", "D", "E", "F", "G", "H"];

  if (from == to) return false;

  if (piece == "KNIGHT") {
    let status = 0;
    if (from[1] == to[1]) return false;
    if (from[0] == to[0]) return false;
    if (
      parseInt(to[1]) > 8 ||
      parseInt(from[1]) > 8 ||
      parseInt(to[1]) < 1 ||
      parseInt(from[1]) < 1
    )
      return false;
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
  }
  if (piece == "PAWN") {
    if (
      pawnMoved == false &&
      from[0] == to[0] &&
      parseInt(from[1]) + 2 == to[1]
    ) {
      pawnMoved = true;
      return true;
    }
    if (from[0] == to[0] && parseInt(from[1]) + 1 == parseInt(to[1]))
      return true;
  }
  if (piece == "ROOK") if (from[1] == to[1] || from[0] == to[0]) return true;

  return false;
}

// console.log(canMove("Rook", "a1", "C1")); //Rook valid move
// console.log(canMove("Rook", "a1", "c8")); //Rook not valid move
// console.log(canMove("Pawn", "d2", "d4")); //Pawn 2 sqre move
// console.log(canMove("Pawn", "a2", "a3")); // Cant 2 sqre now

console.log(canMove("KNIGHT", "b1", "d2"));
