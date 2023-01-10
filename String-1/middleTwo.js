// String-1 -- middleTwo
// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →


function middleTwo(str){
  let mid = str.length/2;
  return str.substring(mid-1, mid+1);
}