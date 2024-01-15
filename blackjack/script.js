let headcard = document.getElementById("head");
let playercard = document.getElementById("player");
let score = 0;
function hit() {
  headcard.innerText = memory();
  playercard.innerText = memory();

  if (parseInt(playercard.innerText) > 21) alert("player is lose");
}

function memory() {
  score += randomnumber();
  return score;
}

function stay() {}

let randomnumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
