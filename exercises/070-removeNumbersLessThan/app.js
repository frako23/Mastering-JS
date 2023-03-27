let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for (const key in obj) {
        if (obj[key] < num && typeof obj[key] == "number"){
            delete obj[key]
            
        } 
    
        
    }
    return obj
}
