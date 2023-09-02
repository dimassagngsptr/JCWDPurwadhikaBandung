let sum = (a, b) => {
   a[0] += b[0];
   a[1] += b[1];
   a[2] += b[2];
   return a
};
console.log(sum([1, 2, 3], [3, 2, 1]));
