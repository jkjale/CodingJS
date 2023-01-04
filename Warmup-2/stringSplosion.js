// Warmup-2 -- stringSplosion
// Given a non-empty string like "Code" return a string like "CCoCodCode".

// Examples


function stringSplosion(str){
  let ans = '';
  for (let i = 0; i <= str.length; i++) {
    ans += str.substring(0, i);
  }
  return ans;
}