// Array-1 -- make2
// Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

// Examples

// make2([4, 5], [1, 2, 3]) → 4,5
// make2([4], [1, 2, 3]) → 4,1
// make2([], [1, 2]) → 1,2


function make2(a, b){
  let arr = [];
  
  if (a.length > 0) {
    if (a.length > 1) {
      arr.push(a[0], a[1]);
    } else {
      arr.push(a[0], b[0]);
    }
  } else {
    arr.push(b[0], b[1]);
  }
  
  return arr;
}