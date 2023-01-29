// Logic-1 -- less20
// Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

// Examples

// less20(18) → true
// less20(19) → true
// less20(20) → false


function less20(n){
  let mod = 0;
  
  if (n > 20) {
    mod = n % 20;
    if (Math.abs(20-mod) === 1 || Math.abs(20-mod) === 2) {
      return true;
    }
  } else {
    mod = 20 % n;
    if (mod === 1 || mod === 2) {
      return true;
    }
  }
  
  return false;
}