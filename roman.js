// let romanToInt = (number) => {
//    let romans = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//    };
//    let res = 0;
// //    let val = 0;
//    for (let i = 0; i <= number.length; i++) {
//     romans[number[i]] < romans[number[i]] ? res -= romans[number[i]] : res += romans[number[i]] 
//    }
//    return res;
// };
// console.log(romanToInt("MCMXCIV"));


function myFunc(str) {
   let n = 0;
   let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
   for (let i = 0; i < str.length; i++) {
      // console.log(roman[str[i]])
      if (roman[str[i]] < roman[str[i + 1]]) {
         n -= roman[str[i]];
      } else {
         n += roman[str[i]];
      }
   }

   return n;
}

console.log(myFunc("XL"));
console.log(myFunc("MCMXCIV"));
console.log(myFunc("LVIII"));