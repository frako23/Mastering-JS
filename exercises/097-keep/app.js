// Write your function here
function keep(arr, keeper) {
    if (!(arr.filter(i => i ==keeper))) {
        return []
    }
    return arr.filter( i => i == keeper)
}

let output = keep([1, 4, 3, 3, 1], 2)
console.log(output); // --> [2, 2]