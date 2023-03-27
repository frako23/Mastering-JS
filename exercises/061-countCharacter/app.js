function countCharacter(str, char) {
    // your code here
    const newStr = str.split("");
    
    const a = newStr.filter((word) => word == char)
    return a.length 
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);