// FUNCTION
// function depression
function square(number, num) {
   return number * num;
}
console.log(square(10, 5));

// function expression
let square2 = (number) => {
   return number * number;
};

console.log(square2(5));

// function scope
let hello = "Hello";
let greeting = () => {
   hello = "Hi";
   return hello;
};
console.log(greeting());
console.log(hello);

// rest parameters

let multiply = (a, b, ...other) => {
   console.log(other);
   return a * b;
};
console.log(multiply(10, 2, 3, 4, 5, 6, 7));

// nested function

let getMessage = (firstName) => {
   function sayHello() {
      return "Hello " + firstName + ", ";
   }
   function wellcomeMessage() {
      return "Wellcome to Purwadhika";
   }
   return sayHello() + wellcomeMessage();
};
console.log(getMessage("Dimas"));

// closure function

let greetings = (name) => {
   let defaultMessage = "Hello ";
   return function () {
      return defaultMessage + name;
   };
};
let greetingDavid = greetings("Dimas");
console.log(greetingDavid());

// currying function
let multiplier = (factor) => {
   return function (number) {
      return factor * number;
   };
};
const mul3 = multiplier(3);
const mul4 = multiplier(4);
console.log(mul3(5));
console.log(mul4(5));

// recursive

let countDown = (fromNumber) => {
   console.log(fromNumber);
   let nextNumber = fromNumber - 1;
   if (fromNumber > 0) {
      countDown(nextNumber);
   }
};
countDown(5)