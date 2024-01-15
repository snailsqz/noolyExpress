// Input:
// const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
// const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

// Output:
// [ 'honeydew', 'orange', 'date' ]

function findWords(words, chars) {
  let trueoutput = [];
  let list = [];
  for (let index = 0; index < words.length; index++) {
    var stringArray = words[index].split("");
    for (let i = 0; i < stringArray.length; i++) {
      list = [];
      for (let j = 0; j < chars.length; j++)
        if (chars[j] == stringArray[i]) list.push(chars[j]);
      if (list[i] == stringArray[i]) trueoutput.push(words[index]);
    }
  }

  let list1 = [],
    sum = [];
  for (let i = 0; i < trueoutput.length; i++) {
    let currentsum = 0;
    list1 = trueoutput[i].split("");
    for (let j = 0; j < list1.length; j++) currentsum += list1[j].charCodeAt(0);

    sum.push(currentsum);
  }

  for (let i = 0; i < trueoutput.length; i++) {
    if (sum[i] < sum[i + 1]) {
      [trueoutput[i], trueoutput[i + 1]] = [trueoutput[i + 1], trueoutput[i]];
      [sum[i], sum[i + 1]] = [sum[i + 1], sum[i]];
    }
  }

  return trueoutput;
}

const words = ["cherry", "date", "honeydew", "orange", "papaya"];
const characters = ["o", "r", "a", "n", "g", "e", "h", "y", "d", "w", "t"];

const result = findWords(words, characters);
console.log(result);

// const words2 = ["date", "fig", "mango"];
// const characters2 = ["a", "t", "e", "m", "n", "g", "o", "f", "i"];

// const result2 = findWords(words2, characters2);
// console.log(result2);

// const words3 = ["apple", "banana", "orange", "kiwi"];
// const characters3 = ["a", "p", "l", "e", "o", "r", "n", "g"];

// const result3 = findWords(words3, characters3);
// console.log(result3);

module.exports = { findWords };
