// String-2 -- catDog
// Return true if the string "cat" and "dog" appear the same number of times in the given string.

// Examples

// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true


function catDog(str){
  let catCounter = 0;
  let dogCounter = 0;
  
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] + str[i+1] + str[i+2] === 'cat') {
      catCounter++;
    }
    if (str[i] + str[i+1] + str[i+2] === 'dog') {
      dogCounter++;
    }
  }
  
  if (catCounter === dogCounter) {
    return true;
  }
  
  return false;
}