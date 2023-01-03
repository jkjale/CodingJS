// Warmup-2 -- stringTimes
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// Examples

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi


function stringTimes(str, n){
  let ans = '';
  for (let i = 0; i < n; i++) {
    ans += str;
  }
  return ans;
}