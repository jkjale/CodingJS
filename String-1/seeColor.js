// String-1 -- seeColor
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue


function seeColor(str){
  if (str[0] === 'r') {
    if (str.substring(0, 3) === 'red') {
      return 'red';
    }
  }
  if (str[0] === 'b') {
    if (str.substring(0,4) === 'blue') {
      return 'blue';
    }
  }
  return '';
}