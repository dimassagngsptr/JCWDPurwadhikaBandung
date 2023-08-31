let n = 10;
let curr = 0;
let next = 1;
let desc = "";

for (let i = 1; i <= n; i++) {
   desc += ` ${curr}`;
   let count = curr + next;
   curr = next;
   next = count;
}

console.log(`${n} => ${desc}`);
