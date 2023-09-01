let a = 9;
let b = 10;
let c = 8;

if (a > b) {
   let d = a;
   a = b;
   b = d;
}

if (b > c) {
   let d = b;
   b = c;
   c = d;
}

if (a > b) {
   let d = a;
   a = b;
   b = d;
}

console.log(a, b, c);
