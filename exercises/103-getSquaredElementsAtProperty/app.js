let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key] == 0) {
      return []
    }
    let newArr = [];
    for (let i = 0; i < obj[key].length; i++) {
      newArr.push(Math.pow(obj[key][i],2))
      
    }
    return newArr
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]