function getAllElementsButLast(array) {
    // your code here
    array.pop()
    return array
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); 