/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let text = s.toUpperCase();
  let sum = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      map.get(text[i]) == 1 &&
      (map.get(text[i + 1]) == 5 || map.get(text[i + 1]) == 10)
    ) {
      sum += map.get(text[i + 1]) - 1;
      i++;
    } else if (
      map.get(text[i]) == 10 &&
      (map.get(text[i + 1]) == 50 || map.get(text[i + 1]) == 100)
    ) {
      sum += map.get(text[i + 1]) - 10;
      i++;
    } else if (
      map.get(text[i]) == 100 &&
      (map.get(text[i + 1]) == 500 || map.get(text[i + 1]) == 1000)
    ) {
      sum += map.get(text[i + 1]) - 100;
      i++;
    } else sum += map.get(text[i]);
  }
  return sum;
};

console.log(romanToInt("IVV"));

//usage of map
