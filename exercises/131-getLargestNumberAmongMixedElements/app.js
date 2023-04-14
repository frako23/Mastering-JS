function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return 0
    } 
    let c = arr.filter(i => typeof i == "number")
    console.log(c);
    if (c.length == 0 ) {
        return 0
    }
    let a = c[0];
   
    for (const iterator of c) {

        console.log(a);
        if (iterator > a) {

            a = iterator;
        } 
    }
    return a
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5