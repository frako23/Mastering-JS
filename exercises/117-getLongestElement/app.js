function getLongestElement(arr) {
    // your code here
    if (arr == 0) {
        return 0
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length)
        
    } 

    for (const key in newArr) {
        if ((key - (key + 1)) ) {
            const element = object[key];
            
        }
    }
    return Math.max(...newArr)
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'