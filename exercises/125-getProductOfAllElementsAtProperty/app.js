let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
      return 0
    }
    let plus = 1;
    for (const i of obj[key]) {
      plus *= i
    }
    return plus
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24