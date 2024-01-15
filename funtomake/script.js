const buttons = document.querySelectorAll(".hero button");
const display = document.querySelector(".firstbox h1");
let textdisplay = "";

buttons.forEach((e) => {
  e.addEventListener("click", (event) => {
    if (!isNaN(event.target.innerHTML)) {
      textdisplay += event.target.innerHTML;
      display.innerHTML = textdisplay;
    } else if (event.target.innerHTML == "Del") {
      let textdel = textdisplay.split("");
      textdel.pop();
      textdisplay = textdel.join("");
      display.innerHTML = textdel.join("");
    } else {
      textdisplay += event.target.innerHTML;
      display.innerHTML = textdisplay;
    }
  });
});

document.addEventListener("keyup", (event) => {
  if (event.key == "Backspace") {
    let textdel = textdisplay.split("");
    textdel.pop();
    textdisplay = textdel.join("");
    display.innerHTML = textdel.join("");
  } else {
    textdisplay += event.key;
    display.innerHTML = textdisplay;
  }
});

//Todolist

const todo = document.querySelector(".todo");
const inputCheckbox = document.createElement("input");
const inputString = document.createElement("p");
const div = document.createElement("div");

inputCheckbox.type = "checkbox";

div.appendChild(inputCheckbox);
div.appendChild(inputString);

todo.appendChild(div);
