// Given a string, return true if the string starts with 'hi'and false otherwise.

// Examples

// startHi('hi there') → true
// startHi('hi') → true
// startHi('hello hi') → false


function startHi(str){
  if (str.substring(0,2) === 'hi') {
    return true;
  }
  return false;
}