// Write your function here

function getAverageOfElementsAtProperty(obj, i) {

    if (!(i in obj)){
        return 0
    } if (!(Array.isArray(obj[i]))) {

        return 0

    } if ( obj[i].length == 0) {
        return 0
    } 

    let suma = 0;
    for (let n of obj[i]) 
    suma += n;

    return suma/obj[i].length

    }


let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output)