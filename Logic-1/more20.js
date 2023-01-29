// Logic-1 -- more20
// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples

// more20(20) → false
// more20(21) → true
// more20(22) → true


function more20(n){
  let mod = n % 20;
  
  if (mod === 1 || mod === 2) {
    return true;
  }
  
  return false;
}