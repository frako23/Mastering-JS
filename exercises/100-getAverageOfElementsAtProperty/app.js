  // your code here
  function getAverageOfElementsAtProperty(obj, key) {
    if (!obj[key]|| !Array.isArray(obj[key]) || obj[key].length == 0 ) {
      return 0
  }
  let avrg = 0
  for (let i = 0; i < obj[key].length; i++) {
      avrg = avrg + obj[key][i]
      
  }
  return avrg/obj[key].length
}

let obj = {
  key: []
};
let output = getAverageOfElementsAtProperty(obj, 'ey');
console.log(output); // --> 2 