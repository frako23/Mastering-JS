function getAllWords(str) {
    // your code here
    if (str == "" ){
        return []
    }
    return str.split(" ")
}

let output = getAllWords('Radagast the Brown');
console.log(output);