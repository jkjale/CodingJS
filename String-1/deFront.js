// String-1 -- deFront
// Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

// Examples

// deFront('Hello') → llo
// deFront('java') → va
// deFront('away') → aay


function deFront(str){
  let isA = false;
  let isB = false;
  
  if (str[0] === 'a') {
    isA = true;
  }
  
  if (str[1] === 'b') {
    isB = true;
  }
  
  if (isA && isB) {
    return str;
  } else if (isA) {
    return str[0] + str.substring(2);
  } else if (isB) {
    return str.substring(1);
  } else {
    return str.substring(2);
  }
}