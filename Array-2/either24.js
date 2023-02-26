// Array-2 -- either24
// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

// Examples

// either24([1, 2, 2]) → true
// either24([4, 4, 1]) → true
// either24([4, 4, 1, 2, 2]) → false


function either24(nums){
  let counter = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i+1] === 2) {
      counter++;
    }
    if (nums[i] === 4 && nums[i+1] === 4) {
      counter++;
    }
  }
  
  if (counter === 1) {
    return true;
  }
  
  return false;
}