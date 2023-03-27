function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if (person.age > 15) {
    return true
  } else {
    return false
  }
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output);