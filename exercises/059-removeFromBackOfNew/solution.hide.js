function removeFromBackOfNew(arr) {
    // your code here
    let newArr = arr.filter((e, index,arr)=> index != arr.length-1)
    return newArr
}