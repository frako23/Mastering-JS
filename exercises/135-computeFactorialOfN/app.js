function computeFactorialOfN(n) {
    // your code here
    let a = 1;
  for (let e = 1; e <n+1 ;  e++) {
    a *= e
    console.log(a);
    
  }
  return a
}

let output = computeFactorialOfN(3); console.log(output); // --> 6