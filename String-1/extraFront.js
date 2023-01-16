// String-1 -- extraFront
// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// Examples

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH


function extraFront(str){
  let ans = '';
  for (let i = 0; i < 3; i++) {
    if (str.length > 1) {
      ans += str.substring(0,2);
    } else {
      ans += str;
    }
    
  }
  return ans;
}