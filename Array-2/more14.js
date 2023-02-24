// Array-2 -- more14
// Given an array of ints, return true if the number of 1's is greater than the number of 4's

// Examples

// more14([1, 4, 1]) → true
// more14([1, 4, 1, 4]) → false
// more14([1, 1]) → true


function more14(nums){
  let oneCounter = 0;
  let fourCounter = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      oneCounter++;
    }
    if (nums[i] === 4) {
      fourCounter++;
    }
  }
  
  if (oneCounter > fourCounter) {
    return true;
  }
  
  return false;
}