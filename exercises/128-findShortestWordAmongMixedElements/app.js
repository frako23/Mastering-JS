function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0) {
        return ""
    } 
    let c = arr.filter(i => typeof i == "string")
    if (c.length == 0 ) {
        return ""
    }
    let a = c[0];
    let b = a.length;
    for (const iterator of c) {

        console.log(a);
        if (iterator.length < b) {
            b = iterator.length
            a = iterator;
        } 
    }
    return a
}
let output = findShortestWordAmongMixedElements([]);
console.log(output); // --> 'two'