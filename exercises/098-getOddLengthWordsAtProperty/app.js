// Write your function here
function getOddLengthWordsAtProperty(obj,key) {
    if (obj[key] == 0) {
        return []
    } if (!(obj[key])) {
        return []        
    } if (!(Array.isArray(obj[key]))) {
        return []
    } 
    let newArr = [];
    for (let index = 0; index < obj[key].length; index++) {
        if (obj[key][index].length % 2 != 0) {
            newArr.push(obj[key][index])
        }
        
    }
    
    return newArr
}

let obj = {
    key: ['It', 'has', 'some', 'words']
    };
    let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']