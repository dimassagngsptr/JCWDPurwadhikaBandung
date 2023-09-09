function generatePrimes(num1, num2) {
   // Write your code here
   let res1 = 0;
   let res2 = 0;
   for (let i = num1; i <= num2; i++) {
      if (num1[i] <= 2) {
         return 0;
      } else if (num1[i] % 2 == 0) {
         res1 ++
        } else if (num1[i] % 2 == 1) {
          res2 ++
        }
    } return res1
}

console.log(generatePrimes(1, 10));
