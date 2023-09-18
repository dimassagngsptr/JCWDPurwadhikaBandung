let gcd = (a, b) => {
   while (b !== 0) {
      let result = b;
      b = a % b;
      a = result;
   }
   return a;
};
console.log(gcd(20, 16));
