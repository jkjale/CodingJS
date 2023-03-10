// AP-1 -- scoresIncreasing
// Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.

// Examples

// scoresIncreasing([1, 3, 4]) → true
// scoresIncreasing([1, 3, 2]) → false
// scoresIncreasing([1, 1, 4]) → true


function scoresIncreasing(scores){
  let counter = 0;
  
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] <= scores[i+1]) {
      counter++;
    }
  }
  
  if (scores.length - 1 === counter) {
    return true;
  }
  
  return false;
}