function joinArrayOfArrays(arr) {
  // your code here
  let newArr = [];

  for (const e of arr) {
    newArr = newArr.concat(e)
  }
  return newArr
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']