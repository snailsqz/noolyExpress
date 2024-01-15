function findDupe(nums) {
  let foundNum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] == nums[j + 1]) {
        foundNum.push(nums[i]);
        console.log("hi");
      }
    }
  }
  return foundNum;
}

console.log(findDupe([3, 2, 3, 4, 2]));
