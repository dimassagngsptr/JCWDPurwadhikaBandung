let str = (n) => {
   let result = [];
   for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
         console.log("Fizz Buzz");
      } else if (i % 5 === 0) {
         console.log("Buzz");
      } else if (i % 3 === 0) {
         console.log("Fizz");
      } else {
         console.log(i);
      }
   }
   // return result;
};
console.log(str(30));
