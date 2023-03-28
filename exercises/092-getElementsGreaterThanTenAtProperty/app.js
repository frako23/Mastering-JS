// Write your function here
function getElementsGreaterThan10AtProperty(obj, i) {
    
    if (!(obj[i])) {
        return []
    }
    if (obj[i] == 0) {
        return []
    } if (!(Array.isArray(obj[i]))) {
        return []
    }  if (!(obj[i].filter(i => i >10))){
        return []
    }
    
    return obj[i].filter(i => i > 10)
    
}

let obj = {
    e: 3
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]