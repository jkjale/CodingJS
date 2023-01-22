// String-2 -- endOther
// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true\


function endOther(a, b){
  let lowerA = a.toLowerCase();
  let lowerB = b.toLowerCase();
  
  if (lowerA.length > lowerB.length) {
    if (lowerA.substring(lowerA.length - lowerB.length) === lowerB) {
      return true;
    }
  } else if (lowerA.length < lowerB.length) {
    if (lowerB.substring(lowerB.length - lowerA.length) === lowerA) {
      return true;
    }
  } else {
    if (lowerA === lowerB) {
      return true;
    }
  }
  
  return false;
}