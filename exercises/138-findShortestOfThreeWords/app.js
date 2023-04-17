function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
        let a = word1.length
    if (a <= word2.length) {
        if (a <= word3.length){
            return word1
        } else {
            return word3
        }
    } else  {a = word2.length
        if (a > word3.length){
            return word3
    
} return word2
    }
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'