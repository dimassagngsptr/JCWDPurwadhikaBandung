let num = 5;
let counter = 1;
let desc = "1";
for (let i = 2; i <= num; ++i) {
   desc += ` + ${i}`;
   counter += i;
}

console.log(`${num} → ${desc} = ${counter} `);
