// String-1 -- middleThree
// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi


function middleThree(str){
  let mid = Math.floor(str.length/2);
  if (str.length > 3) {
    return str.substring(mid-1, mid+2);
  } else {
    return str;
  }
}