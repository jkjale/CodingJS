// String-2 -- repeatEnd
// Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

// Examples

// repeatEnd('Hello', 3) → llollollo
// repeatEnd('Hello', 2) → lolo
// repeatEnd('Hello', 1) → o


function repeatEnd(str, n){
  let ans = '';
  
  for (let i = 0; i < n; i++) {
    ans += str.substring(str.length - n);
  }
  
  return ans;
}