// Array-2 -- isEverywhere
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

// Examples

// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false


function isEverywhere(nums, val){
  let ans = false;
  let counter = 0;
  let inc = 0;
  
  if (nums.length < 2) {
    ans = true;
  }
  
  if (nums[0] !== val) {
    inc = 1;
  }
  
  for (let i = inc; i < nums.length; i+=2) {
    if (nums[i] === val) {
      counter++;
    }
  }
  
  if (nums.length % 2 !== 0) {
    if (nums[0] === val) {
      if (Math.floor(nums.length/2) === counter + 1) {
        ans = true;
      }
      if (Math.floor(nums.length/2) + 1 === counter) {
        ans = true;
      }
    }
    if (nums[1] === val) {
      if (Math.floor(nums.length/2) === counter) {
        ans = true;
      }
    }
  } else {
    if (Math.floor(nums.length/2) === counter) {
      ans = true;
    }
  }
  
  return ans;
}