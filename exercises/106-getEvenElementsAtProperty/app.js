
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key] == 0) {
      return []
    }
    let newArr = [];
    obj[key].map(i => i % 2 == 0 ? newArr.push(i) : null )
    return newArr
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]