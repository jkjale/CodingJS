// Logic-1 -- twoAsOne
// Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

// Examples

// twoAsOne(1, 2, 3) → true
// twoAsOne(3, 1, 2) → true
// twoAsOne(3, 2, 2) → false


function twoAsOne(a, b, c){
  let arr = [a,b,c];
  
  arr.sort((a,b) => a - b);
  
  if (Math.abs(arr[0]) + Math.abs(arr[1]) === arr[2]) {
    return true;
  }
  
  return false;
}