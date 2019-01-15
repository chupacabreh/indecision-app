"use strict";

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

var user = {
  name: "Andrew",
  cities: ["Philadelphia", "Oakland", "Atlanta"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge Bitch

var multiplier = {
  // numbers - an array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied
  numbers: [7, 8, 11, 44],
  multiplyBy: 69,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
