let num = 5;
let counter = 1;
let desc = num;

for (let i = num; i > 0; i--) {
   desc += ` * ${i - 1}`;
   counter *= i;
}

console.log(`${num} => ${desc} = ${counter}`);
