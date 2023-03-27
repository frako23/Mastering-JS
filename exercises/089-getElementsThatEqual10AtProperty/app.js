// Write your function here
function getElementsThatEqual10AtProperty(obj, i) {
    if (!(i in obj)){
        return []
    } if (!(Array.isArray(obj[i]))) {

        return []

    } if ( obj[i].length == 0) {
        return []
    } 
    return obj[i].filter(i => i == 10)
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);