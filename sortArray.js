let arr = [20, 50, 60, 40, 70, 80, 100, 90];

// mencari nilai terendah dan tertinggi array
let low = Math.min(...arr);
let high = Math.max(...arr);
// mencari average
let red = arr.reduce((a, b) => a + b);
let avg = red / arr.length;
console.log(
   `Nilai terendah adalah ${low} dan nilai tertinggi adalah ${high}, total nilai didalam array adalah ${red} dan avg nya adalah ${avg}`
);
