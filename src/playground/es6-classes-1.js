class Person {
  constructor(name = "Anonymous", age = 0) {
    // <-- name = "Anonymous" is a function default.
    this.name = name; // inside class methods, 'this' refers to the class instance
    this.age = age;
  }
  getGreeting() {
    // return "Hi! I am" + this.name + "!";
    return `Hi. I am ${this.name}.`; // back ticks are template strings - can inject values right into the string
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  // hasLocation() {
  //   return !!this.homeLocation;
  // }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler("Matt Freitas", 35, "Oakland"); // <-- creating an instance of the class
console.log(me.getGreeting());
// constructor function is the function that gets called when we make a new instance
// it gets called with all of the arguments that we pass in
const other = new Traveler();
console.log(other.getGreeting());
