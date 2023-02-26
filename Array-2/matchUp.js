// Array-2 -- matchUp
// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

// Examples

// matchUp([1, 2, 3], [2, 3, 10]) → 0
// matchUp([1, 2, 3], [2, 3, 5]) → 0
// matchUp([1, 2, 3], [2, 3, 3]) → 0


function matchUp(a, b){
  let counter = 0;
  
  for (let i = 0; i < a.length; i++) {
    let diff = Math.abs(a[i] - b[i]);
    if (diff > 0 && diff <= 2) {
      counter++;
    }
  }
  
  return counter;
}