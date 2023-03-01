// Array-2 -- haveThree
// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

// Examples

// haveThree([3, 1, 3, 1, 3]) → true
// haveThree([3, 1, 3, 3]) → false
// haveThree([3, 4, 3, 3, 4]) → false


function haveThree(nums){
  let threeCounter = 0;
  let otherCounter = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3 && nums[i+1] !== 3) {
      threeCounter++;
    } else {
      otherCounter++;
    }
  }
  
  if (threeCounter === 3 && otherCounter > 0) {
    return true;
  }
  
  return false;
}