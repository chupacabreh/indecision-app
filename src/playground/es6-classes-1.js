//classes are like a blueprint - reusuable code

// Car Class
// make
// model
// vin
// getDescription - method we can have access to on all instances of the car class

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Hi " + this.name + "!";
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const me = new Person("Matt", 35);

const other = new Person();

console.log(me.getDescription());
console.log(other.getDescription());
