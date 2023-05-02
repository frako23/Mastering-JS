function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let a = 0;
  let b = 0;
  a = principal *(Math.pow((1+(interestRate/compoundingFrequency)),(compoundingFrequency*timeInYears)))
  b = a- principal
  return b

}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543