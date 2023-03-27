// Write your function here
function getElementsLessThan100AtProperty(obj, i) {
    if (!(i in obj)){
        return []
    } if (!(Array.isArray(obj[i]))) {

        return []

    } if ( obj[i].length == 0) {
        return []
    } 
    return obj[i].filter(i => i < 100)
}