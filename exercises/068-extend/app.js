let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    const x = Object.keys(obj2).filter(key => !(key in obj1) )
    obj1[x[0]] = obj2[x[0]];
    console.log(obj1);
    return obj1
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

// console.log(Object.keys(obj2));