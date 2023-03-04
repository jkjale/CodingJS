// Array-2 -- zeroFront
// Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

// Examples

// zeroFront([1, 0, 0, 1]) → 0,0,1,1
// zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
// zeroFront([1, 0]) → 0,1


function zeroFront(nums){
  let arr1 = [];
  let arr2 = [];
  let ans = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }
  
  for (let j = 0; j < arr1.length; j++) {
    ans.push(arr1[j]);
  }
  
  for (let k = 0; k < arr2.length; k++) {
    ans.push(arr2[k]);
  }
  
  return ans;
}