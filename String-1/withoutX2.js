// String-1 -- withoutX2
// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// Examples

// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi


function withoutX2(str){
  let isXOne = false;
  let isXTwo = false;
  
  if (str[0] === 'x') {
    isXOne = true;
  }
  
  if (str[1] === 'x') {
    isXTwo = true;
  }
  
  if (isXOne && isXTwo) {
    return str.substring(2);
  } else if (isXOne) {
    return str.substring(1);
  } else if (isXTwo) {
    return str[0] + str.substring(2);
  } else {
    return str;
  }
}