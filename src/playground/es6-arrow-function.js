const square = function(x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = x => {
//   return x * x;
// };

const squareArrow = x => x * x;

console.log(squareArrow(4));

// Challenge use arrow functions
// getFirstName('Mike Smith') => "Mike"
// create regular arrow funvtion "verbose"
// create arrow function using shorthand

const getFirstNameVerbose = name => {
  return name.split(" ")[0];
};

console.log(getFirstNameVerbose("Matt Freitas"));

const getFirstName = name => name.split(" ")[0];

console.log(getFirstName("Mike Smith"));
