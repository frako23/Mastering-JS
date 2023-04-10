let obj = {
  key: [1, 2, 12, 15]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
      return []
    } 
    return obj[key].sort(function(a, b){return a - b})[obj[key].length -1]
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4