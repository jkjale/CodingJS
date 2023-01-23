// String-2 -- xyBalance
// We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

// Examples

// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false


function xyBalance(str){
  let xIndex = [];
  let yIndex = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      xIndex.push(i);
    }
    if (str[i] === 'y') {
      yIndex.push(i);
    }
  }
  
  if (xIndex[xIndex.length-1] < yIndex[yIndex.length-1]) {
    return true;
  } else if (xIndex[xIndex.length-1] === yIndex[yIndex.length-1]) {
    return true;      
  } 
  
  if (yIndex.length > xIndex.length) {
    return true;
  }

  return false;
}