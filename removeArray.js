let remove = (angka) => {
   let ganjil = [];
   let genap = [];
   for (let i = 0; i <= angka; i++) {
      if (i % 2 === 0) {
         genap.push(i);
      } else if (i % 2 === 1) {
         ganjil.push(i);
      }
   }
   return [ganjil, genap];
};
console.log(remove(8));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let even = (array) => array.filter((item) => item % 2 === 0);
console.log(even(arr));
