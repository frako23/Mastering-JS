function filterEvenLengthWords(words) {
    // your code here
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 == 0 ) {
            newArr.push(words[i])
        }
        
    }
    return newArr
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']