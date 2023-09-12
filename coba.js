let arr = (arr) => {
   let arr3 = 0;
   for (const num of arr) {
      arr3 ^= num;
   }
   return arr3;
};
console.log(arr([4, 1, 2, 1, 2]));


let myFunc = (arr) => {
   return arr.filter(v => arr.filter(item => item == v).length == 1)
}
console.log(arr([4, 1, 2, 1, 2]));
