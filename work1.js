//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7

// 123456789 Missing Digit = 0
// 53657687691428890 has no missing digits
// 1981023568910 Missing Digit = 4, 7

const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
  let numbers = new Array(10);
  let lost = "";
  for (let i = 0; i < numStr.length; i++) numbers[numStr[i]] = 1;
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] == null) lost += i + ", ";
  if (lost.length == 0) return numStr + " has no missing digits";
  else
    return numStr + " Missing Digit = " + lost.slice(0, lost.lastIndexOf(","));
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
