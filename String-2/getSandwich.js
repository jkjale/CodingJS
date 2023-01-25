// String-2 -- getSandwich
// A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →


function getSandwich(str){
  let indexArr = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i+5) === 'bread') {
      if (indexArr.length === 0) {
        indexArr.push(i+5);
      } else {
        indexArr.push(i);
      }
    }
  }
  
  if (indexArr.length > 0) {
     return str.substring(indexArr[0], indexArr[indexArr.length-1]);
  }
  
  return '';
}