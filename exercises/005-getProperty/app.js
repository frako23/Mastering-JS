function getProperty(obj, key) {
  // your code here
   return obj[key]
}

let car = {
  model: 'Toyota',
  year: 2007
};

let output = getProperty(car, 'year');


console.log(output);

