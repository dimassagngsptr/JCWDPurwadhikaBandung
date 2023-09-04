let arr = [1, "a", 2, "b", 3, "c", 4];
let myFunc = (input) => {
   return input
      .filter((item) => typeof item == "number")
      .reduce((a, b) => a + b);
};

console.log(myFunc(arr));