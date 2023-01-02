// Warmup-1 -- close10
// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

// Examples

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0


function close10(a, b){
  let newA = Math.abs(10 - a);
  let newB = Math.abs(10 - b);
  
  if (newA < newB) {
    return a;
  } else if (newA > newB) {
    return b;
  } else if (newA === newB) {
    return 0;
  }
}