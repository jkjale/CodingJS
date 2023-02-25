// Array-2 -- no14
// Given an array of ints, return true if it contains no 1's or it contains no 4's.

// Examples

// no14([1, 2, 3]) → true
// no14([1, 2, 3, 4]) → false
// no14([2, 3, 4]) → true


function no14(nums){
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
  
  if (oneCounter === 0 || fourCounter === 0) {
    return true;
  }
  
  return false;
}