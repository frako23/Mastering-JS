function getLengthOfShortestElement(arr) {
    // your code here
    if (arr == 0) {
        return 0
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length)
        
    } 
    return newArr.sort()[0]
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3