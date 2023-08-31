// let i = 0;
// while (i < 3) {
//    console.log(`Hello world! ke ${i}`);
//    i++;
// }

// let p = 0;

// do {
//    console.log(`Hello world! ${p}`);
// } while (p < 3);

// while (true) {
//    if (p === 5) break;
//    p++;
//    console.log(`Hello world! ${p}`);
// }

// for (var i = 0; i < 10; i++) {
//    if (i === 5) {
//       i = "Hello";
//    }
//    console.log(i);
// }

// let num = 3;
// for (let i = 1; i <= 10; i++) {
//    console.log(`${num} x ${i} = ${num * i}`);
// }

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 == 0) {
//       console.log(`${i} adalah bilangan Genap`);
//    } else {
//       console.log(`${i} adalah bilangan Ganjil`);
//    }
// }

// convert celcius to farenheit
let celcius = 30;
let farenheit = 1.8 * celcius + 32;

// // mencari apakah bilangan ganjil atau genap
console.log(
   `${farenheit} adalah bilangan ${farenheit % 2 == 0 ? "genap" : "ganjil"}`
);

// // mencari apakah bilangan tersebut bilangan prima
let value = farenheit;
let prime = true;

if (value == 1) {
   console.log(`${value} bukan bilangan prima`);
} else if (value > 1) {
   for (let i = 2; i < value; i++) {
      value % i === 0 ? (prime = false) : true;
   }
   console.log(
      prime ? `${value} bilangan prima` : `${value} bukan bilangan prima`
   );
} else {
   console.log(`${value} bukan bilangan`);
}

// find the sum of numbers

let sum = [0, 1];
for (sum <= 10; sum++; ) {
   console.log(sum);
}

// fibonaci
let i;
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
   fib[i] = fib[i - 2] + fib[i - 1];
   console.log(fib[i]);
}
