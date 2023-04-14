function computeSummationToN(n) {
  // your code here
  let a = 0;
  for (let e = 0; e <n+1 ;  e++) {
    a += e
    console.log(a);
    
  }
  return a
}

let output = computeSummationToN(6);
console.log(output); // --> 21

