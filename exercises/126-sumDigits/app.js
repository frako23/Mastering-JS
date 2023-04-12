function sumDigits(num) {
    // your code here
    let newNum = 0;
    for (const i of num) {
        newNum += i
    }
    return newNum
}
let output = sumDigits(316);
console.log(output); // --> 4