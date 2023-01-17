// String-1 -- withoutX
// Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

// Examples

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi


function withoutX(str){
  let firstX = false;
  let lastX = false;
  
  if (str[0] === 'x') {
    if (str.length === 1) {
      return '';
    }
    firstX = true;
  }
  
  if (str[str.length-1] === 'x') {
    lastX = true;
  }
  
  if (firstX && lastX) {
    return str.substring(1, str.length-1);
  } else if (firstX || lastX) {
      if (firstX) {
        return str.substring(1);
      } 
     else if (lastX) {
        return str.substring(0, str.length-1);
      }
  } else {
      return str;
  }
}