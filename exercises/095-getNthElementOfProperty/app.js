// Write your function here
function getNthElementOfProperty(obj, key, i) {
    if (!(obj[key])) {
        return undefined
    }
    return obj[key][i]
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2