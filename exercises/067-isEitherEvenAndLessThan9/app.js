function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if (num1 < 9 && num2 < 9){
        if(num1 % 2 == 0 || num2 % 2 == 0) {
            return true
        }
    // } else if () {
    //     return true
    } else {
        return false
    }
}
