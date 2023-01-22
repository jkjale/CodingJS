// String-2 -- xyzThere
// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true


function xyzThere(str){
  for (let i = 0; i < str.length - 2; i++) {
    if (i === 0) {
      if (str[i] === '.') {
        return false;
      }
      if (str[i] === 'x' && str[i+1] === 'y' && str[i+2] === 'z') {
        return true;
      }
    } else {
      if (str[i] === 'x' && str[i+1] === 'y' && str[i+2] === 'z') {
        if (str[i-1] !== '.') {
          return true;
        } 
      }
    }
  }
  return false;
}