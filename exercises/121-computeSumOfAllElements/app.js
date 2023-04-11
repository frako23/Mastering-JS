function computeSumOfAllElements(arr) {
  // your code here
  const sum = arr.reduce((a , b) => a + b)
  return sum
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6