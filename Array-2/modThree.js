// Array-2 -- modThree
// Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

// Examples

// modThree([2, 1, 3, 5]) → true
// modThree([2, 1, 2, 5]) → false
// modThree([2, 4, 2, 5]) → true

function modThree(nums){
  let evenCounter = 0;
  let oddCounter = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenCounter++;
      if (oddCounter > 0) {
        oddCounter--;
      }
    } else {
      oddCounter++;
      if (evenCounter > 0) {
        evenCounter--;
      }
    }
    if (evenCounter === 3 || oddCounter === 3) {
      return true;
    }
  }
  
  return false;
}
