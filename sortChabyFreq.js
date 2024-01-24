function frequencySort(txt) {
  let op = "";
  let arr = [];
  let check = 0;

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == txt[i + 1]) {
      arr[check] = 1;
      let j = 1;
      while (true) {
        if (txt[i + 1] == txt[i + j]) {
          arr[check] += 1;
          j++;
        } else {
          check++;
          i += j - 1;
          break;
        }
      }
    } else arr[check++] = 1;
  }
  const map1 = new Map();
  let j = 0;
  for (let i = 0; i < txt.length; i++) {
    if (txt[i - 1] != txt[i]) {
      map1.set(txt[i], arr[j++]);
    }
  }
  console.log(arr);
  console.log(map1);
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
console.log(frequencySort("AAAAAa"));
