// Array-1 -- unlucky1
// We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

// Examples

// unlucky1([1, 3, 4, 5]) → true
// unlucky1([2, 1, 3, 4, 5]) → true
// unlucky1([1, 1, 1]) → false


function unlucky1(nums){
  let index = [0,1,nums.length - 2];
  
  for (let i = 0; i < index.length; i++) {
    if (nums[index[i]] === 1 && nums[index[i] + 1] === 3) {
      return true;
    }
  }
  
  return false;
}