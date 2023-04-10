let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
      return []
    } 
    return obj[key].sort()[0]
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1