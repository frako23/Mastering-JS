function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr == 0) {
        return 0
    }
    return arr[arr.length -1].length
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5 