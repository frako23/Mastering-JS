// Write your function here
function countAllCharacters(str) {
    let a = str.split("");
    let b = {};
    for (const element of a) {
        if (!b[element]) {
            b[element] = 1
        } else {
            b[element]++
        }
    }
    return b    
    }
    


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
