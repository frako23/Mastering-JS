function sumDigits(num) {
    // your code here
    let a = num.toString()
    let b = a.split("")
    let newNum = 0;
    let neg = false;
    for (const i of b) {
        if (i == "-") {
            neg = true
        } else if (neg == true) {
            newNum -= Number(i);
            neg = false;
        } else {
        newNum += Number(i)
        }
    }
    return newNum
}
let output = sumDigits(-316);
console.log(output); // --> 4