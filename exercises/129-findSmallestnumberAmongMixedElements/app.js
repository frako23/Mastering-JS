function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0) {
    return 0
} 
let c = arr.filter(i => typeof i == "number")
if (c.length == 0 ) {
    return 0
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

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4