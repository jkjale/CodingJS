// Logic-1 -- old35
// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

// Examples

// old35(3) → true
// old35(10) → true
// old35(15) → false


function old35(n){
  let mod3 = n % 3;
  let mod5 = n % 5;
  let mod15 = n % 15;
  
  if (mod3 === 0 && mod5 === 0) {
    return false;
  } else if (mod3 === 0 || mod5 === 0) {
    return true;
  }
  
  return false;
}