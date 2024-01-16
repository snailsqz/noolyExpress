function capToFront(txt) {
  let op = "";
  let check = 0;

  for (let i = 0; i < txt.length; i++) {
    if (check == 0) if (txt[i] == txt[i].toUpperCase()) op += txt[i];
    if (check == 1) if (txt[i] != txt[i].toUpperCase()) op += txt[i];
    if (i == txt.length - 1 && check == 0) {
      check = 1;
      i = -1; // i++ next time and will be 0;
    }
  }

  return op;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
