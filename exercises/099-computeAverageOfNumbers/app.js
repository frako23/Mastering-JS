// Write your function here !
function computeAverageOfNumbers(arr) {
    if (arr.length == 0) {
        return 0
    }
    let avrg = 0
    for (let i = 0; i < arr.length; i++) {
        avrg = avrg + arr[i]
        
    }
    return avrg/arr.length
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3