// Write your function here
function select(arr, obj) {
    let newObject = {}
    
    let objectKeys = arr.filter(i => i in obj);
    for (const iterator of objectKeys) {
        newObject[iterator] = obj[iterator]
    }
    return newObject
    
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }