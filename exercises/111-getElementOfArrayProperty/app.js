let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
        return undefined
      } 
      return obj[key][index]
}
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'