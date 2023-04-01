let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0 ) {
      return []
  }
    let newArr = [];
    for (let index = 0; index < obj[key].length; index++) {
      if (obj[key][index].length % 2 == 0) {
        newArr.push(obj[key][index])
      }
      
    }
    return newArr
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']