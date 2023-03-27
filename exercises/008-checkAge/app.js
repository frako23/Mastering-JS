function checkAge(name, age) {
  // your code here
  if (age > 20) {
    return `Welcome, ${name}!`
  } else {
    return `Go home, ${name}!`
  }
}

let output = checkAge('Adrian', 21);

console.log(output);