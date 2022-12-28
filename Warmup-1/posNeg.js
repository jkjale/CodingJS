/*

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Examples

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

*/


function posNeg(a, b, negative){
  let ans = false;
  if (negative) {
    if (a < 0 && b < 0) {
      ans = true;
    }
  } else {
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      ans = true;
    }
  }
  return ans;
}