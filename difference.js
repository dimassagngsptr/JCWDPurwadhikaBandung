let arr3 = (arr, arr2) => {
   let result = [];
   let value = arr.concat(arr2);
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== value) {
         result.push(arr[i]);
      }
      return result;
   }
};
console.log(arr3([1, 2, 3], [3, 2, 5]));

let dif = (arr1, arr2) => {
   let input = [...arr1, ...arr2];
   let result = [];
   for (let i = 0; i < arr1.length; i++) {
      if (input.filter((item) => item == input[i].length))
         result.push(input[i]);
   }
};
console.log(dif([1, 2, 3], [3, 3, 2]));
