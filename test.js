var myAtoi = function (s) {
  let op = "";
  let check;
  let rnd = 0;
  let numar = ["+", "-", ".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < s.length; i++) {
    if (numar.includes(s[i])) {
      op += s[i];
      if (rnd == 0) check = true;
      rnd++;
    }
    if (check) {
      if (s[i] == ".") return 0;
      if ((s[i] == "+" || s[i] == "-") && (s[i + 1] == "-" || s[i + 1] == "+"))
        return 0;
      if (s[i - 1] != undefined && s[i - 2] != undefined) {
        if (s[i - 1] == " " && s[i - 2] == " ") check = false;
        else if (
          (check && !numar.includes(s[i - 1])) ||
          !numar.includes(s[i - 2])
        )
          return 0;
      }
      check = false;
    }
  }
  if (parseInt(op) > 2147483647) op = 2147483648;
  if (parseInt(op) < -2147483647) op = -2147483648;
  return parseInt(op);
};
//"4193 with words" -> 4193
console.log(myAtoi("words and 987"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("   -42"));
console.log(myAtoi("+-12"));
