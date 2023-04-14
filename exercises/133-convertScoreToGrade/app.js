function convertScoreToGrade(score) {
    // your code here
    if (score <60) {
        return "F"
    } else if (score < 70) {
        return "D"
    } else if (score < 80) {
        return "C" 
    } else if (score < 90) {
        return "B"
    } else if (score < 101) {
        return "A"
    } else {
        return "INVALID SCORE"
    }
    
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'