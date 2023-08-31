let number = 17;
let devider = 0;

for (let i = 1; i < number; i++) {
   if (number % i === 0) {
      devider++;
   }
}
console.log(`${number} ${devider % 2 == 0 ? "is" : "is not"} prime number`);
// console.log(devider);
