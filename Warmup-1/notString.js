/*

Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

Examples

notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad

*/


function notString(str){
  if (str.substring(0, 3) === 'not') {
    return str;
  } else {
    return `not ${str}`;
  }
}