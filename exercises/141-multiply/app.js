function multiply(num1, num2) {
    // your code here
    let a = 0;
    if (num2 < 0) {
        num2= (num2)*-1
        // console.log(num2);
        for (let index = 0; index < num2; index++) {
            a += num1
        }
        a = a*-1

    } else {
     for (let index = 0; index < num2; index++) {
            a += num1
     }
    }
    return a
}

let output = multiply(5, -5);
console.log(output); // --> 28