// Array-1 -- frontPiece
// Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

// Examples

// frontPiece([1, 2, 3]) → 1,2
// frontPiece([1, 2]) → 1,2
// frontPiece([1]) → 1


function frontPiece(nums){
  return nums.splice(0,2);
}