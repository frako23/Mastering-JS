let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) {
        return 0
    }
    let sum = 0;
    for (const i of obj[key]) {
        sum += i
    }
    return sum
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13