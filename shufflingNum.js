function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let shufflingNum = (e) => {
  let trop = [];
  let nums;

  if (typeof e == "string") nums = e.split("");
  else if (typeof e == "object") nums = [...e];

  while (nums.length != 0) {
    let randomNum = getRandomInt(nums.length);
    trop.push(nums[randomNum]);
    nums.splice(nums.indexOf(nums[randomNum]), 1);
  }

  return `from ${e} to ${trop}`;
};

console.log(shufflingNum([2, 1, 6, 7, 3, 4]));
console.log(shufflingNum("230959"));
console.log(shufflingNum("270547"));
console.log(shufflingNum("170746"));
//usage of random,concat,splice,type
