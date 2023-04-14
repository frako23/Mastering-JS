function getLongestElement(arr) {
    // your code here

    
    if (arr.length == 0) {
        return ""
    }
    let a = arr[0];
    let b = a.length;
    for (const iterator of arr) {
        console.log(a);
        if (iterator.length > b) {
            b = iterator.length
            a = iterator;
        } 
    }
    return a
}
let output = getLongestElement(['1234', 'rocky', 'eerie']);
console.log(output); // --> 'three'