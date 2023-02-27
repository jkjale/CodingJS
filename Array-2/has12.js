// Array-2 -- has12
// Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

// Examples

// has12([1, 3, 2]) → true
// has12([3, 1, 2]) → true
// has12([3, 1, 4, 5, 2]) → true


function has12(nums){
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === 2) {
          return true;
        }
      }
    }
  }
  
  return false;
}