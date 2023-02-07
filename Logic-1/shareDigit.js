// Logic-1 -- shareDigit
// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples

// shareDigit(12, 23) → true
// shareDigit(12, 43) → false
// shareDigit(12, 44) → false


function shareDigit(a, b){
  let aDigits = [Math.floor(a/10), a%10];
  let bDigits = [Math.floor(b/10), b%10];
  
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      if (aDigits[i] === bDigits[j]) {
        return true;
      }
    }
  }
  
  return false;
}