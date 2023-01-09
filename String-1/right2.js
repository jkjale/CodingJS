// String-1 -- right2
// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi


function right2(str){
  return str.substring(str.length-2) + str.substring(0,str.length-2);
}