let myFunc = (input) => {
   return input.sort((a, b) => a - b)[1];
};
console.log(myFunc([5, 1, 2, 4, 3]));
