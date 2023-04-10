function getLongestElement(arr) {
    // your code here
    if (arr == 0) {
        return 0
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length)
        
    } 
    return arr.sort()[newArr.length -1]
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'