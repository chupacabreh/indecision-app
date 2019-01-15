// arguments object no longer bound with arrow functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1));

// const addArrow = (a, b) => {
//   // console.log(arguments); // <-- triggers error
//   return a + b;
// };

// this keyword no longer bound with arrow functions

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "Oakland", "Atlanta"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

// Challenge Bitch

const multiplier = {
  // numbers - an array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied
  numbers: [7, 8, 11, 44],
  multiplyBy: 69,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
