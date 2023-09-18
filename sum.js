let sum = (input) => {
   let res = 0;
   input.map((item) => item.map((v) => (res += v)));
   return res;
};
let arr = [
   [1, 2, 3],
   [3, 1, 2],
   [2, 3, 1],
];
console.log(sum(arr));