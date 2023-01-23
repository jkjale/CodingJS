// String-2 -- bobThere
// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false


function bobThere(str){
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === 'b' && str[i+2] === 'b') {
      return true;
    }
  }
  
  return false;
}