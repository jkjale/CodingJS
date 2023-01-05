// Warmup-2 -- stringX
// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

// Examples

// stringX('xxHxix') → xHix
// stringX('abxxxcd') → abcd
// stringX('xabxxxcdx') → xabcdx


function stringX(str){
  let ans = '';
  if (str.length > 0) {
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] !== 'x') {
        ans += str[i];
      }
    }
    return str[0] + ans + str[str.length-1];
  }
  
  return ans;
}