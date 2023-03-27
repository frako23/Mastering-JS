let obj = {
    a: 9,
    b: 11,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    // const x = Object.keys(obj).filter(key => key > num && typeof key == Number )
    
    
    for (const key in obj) {
        if (obj[key] > num && typeof obj[key] == "number"){
            delete obj[key]
            
        } 
    
        
    }
    return obj
}

removeNumbersLargerThan(10, obj);
console.log(obj);