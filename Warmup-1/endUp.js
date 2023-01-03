// Warmup-1 -- endUp
// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

// Examples

// endUp('Hello') → HeLLO
// endUp('hi there') → hi thERE
// endUp('hi') → HI


function endUp(str){
  let ans = '';
  for (let i = 0; i < str.length; i++) {
      if (i > str.length - 4) {
        ans += str[i].toUpperCase();
      } else{
        ans += str[i];
      }
  }
  return ans;
}