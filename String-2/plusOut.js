// String-2 -- plusOut
// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

// Examples

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy


function plusOut(str, word){
  let len = word.length;
  let ans = '';
  let yesInd = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i+len) === word) {
      for (let j = i; j < i + len; j++) {
        yesInd.push(j);
      }
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    let x = str[i];
    if (yesInd.indexOf(i) === -1) {
      x = '+'; 
    }
    ans += x;
  }
  
  return ans;
}