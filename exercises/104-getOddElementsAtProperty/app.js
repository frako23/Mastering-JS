let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
      return []
    }
    let newArr = [];
    for (let i = 0; i < obj[key].length; i++) {
      
      if (obj[key][i] % 2 != 0) {
        newArr.push(obj[key][i])
        
      }
      // if (!(obj[key][i] % 2 != 0)) {
      //   return []
      // } 
    }
    return newArr
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]