// Warmup-2 -- altPairs
// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// Examples

// altPairs('kitten') → kien
// altPairs('Chocolate') → Chole
// altPairs('CodingHorror') → Congrr


function altPairs(str){
  let ans = '';
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    if (i % 4 === 0) {
      arr.push(i, i+1);
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(i) !== -1) {
      ans += str[i];
    }
  }
  
  return ans;
}