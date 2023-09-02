// palindrome

// convert centimeter to kilometers
let cm = 8000;
let km = cm / 1000;
console.log(km);

// format number as currency
let num = 10;
let desc = "";
for (let i = 1; i <= num; i++) {
   desc += ` Rp.${i}.000,00`;
}
console.log(`${desc}`);

// capital
// let str = "bandung";
// for (let i = str.length; i >= 0; i--) {
//    console.log(str.charAt(i));
// }

// menunjukan type input
let kata = true;

if (typeof kata === "string") {
   console.log("string");
} else if (typeof kata === "number") {
   console.log("number");
} else if (typeof kata === "boolean") {
   console.log("boolean");
} else {
   console.log("input word!");
}
//  Write a code to find the largest of two given integers
let largest = (a, b) => {
   num1 = a;
   num2 = b;
   if (num1 > num2) {
      return `${num1} lebih besar`;
   } else {
      return `${num2} lebih besar`;
   }
   l;
};
console.log(largest(5, 10));

// short number

// let number = 20;

// for (let i = 0; i <= number; i++) {
//    let perkalian3 = "";
//    let angka = "";
//    if (i % 3 === 0) {
//       perkalian3 += [i];
//    } else {
//       angka += [i];
//    }
//    console.log(angka);
// }

// let word = "purwadhika bandung";
// let cap = word[0].toUpperCase();
// let noCap = word.slice(1, 1000);
// console.log(`${cap}` + `${noCap}`);

// paliendrome code

// let str = "dimas";
// let l = len(str);
// let p = l - 1;

// index = 0;

// while (index < p) {
//    if (str[index] === str[p]) {
//       index = index + 1;
//       p = p - 1;
//       console.log("String is a palindrome character");
//       break;
//    } else {
//       console.log("String is not a palindrome character");
//    }
// }

let palindrome = (str) => {
   let len = Math.floor(str.length / 2);
   for (let i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1]) return console.log("not palindrome");
   return console.log("palindrome");
};
console.log(palindrome("popop"));
