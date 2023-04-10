let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
      return []
    } 
    return obj[key].filter((arr,i) => i !== (obj[key].length -1))
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]