// Write your function here
function findMinLengthOfThreeWords(x, y, z) {
    if (x.length < y.length) {

        if (x.length < z.length) {

            return x.length

        } return z.length

    }  if (x.length > y.length) {

        if (y.length < z.length) {

            return y.length

        } return z.length
    
} if (x.length > z.length) {

    if (z.length < y.length) {

        return z.length

    } return y.length

} 

}

let output = findMinLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
console.log(output); // --> 1