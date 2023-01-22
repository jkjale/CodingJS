// String-2 -- countCode
// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

// Examples

// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2


function countCode(str){
  let counter = 0;
  
  for (let i = 0; i < str.length - 3; i++) {
    if (str[i] === 'c' && str[i+1] === 'o' && str[i+3] === 'e') {
      counter++;
    }
  }
  
  return counter;
}