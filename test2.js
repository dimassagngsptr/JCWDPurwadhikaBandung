// let findMaxNumber = (arr) => {
// //    for (let i = arr.length; i >= 0; i--) {
// //       res.push(arr[i]);
// //    }
// //    return res.join("");
// return arr.sort((a, b) => b-a).join("");
// };
// console.log(findMaxNumber([1,2,3,4,5,6,7]));

function printSmallestAndLargestAlternately(arr) {
   let arr1 = 0;
   let arr2 = [];
   arr.sort((a, b) => a - b);
   for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
      //   console.log(arr[i]);
      arr1 += arr[i];
      if (i < j) {
         //  console.log(arr[j]);
         arr2.push(arr[j]);
      }
   }
   return arr1
}

const arr = [5, 9, 2, 6, 1, 8];
printSmallestAndLargestAlternately(arr);

// const arr = [5, 9, 2, 6, 1, 8];
// console.log(printSmallestAndLargestAlternately(arr));

// function calculateResults(arr) {
//    let win = Math.floor(arr[2] / 3);
//    let draw = arr[2] % 3;
//    let lose = arr[1] - win - draw;
//    return [win, draw, lose];
// }
// console.log(calculateResults([2, 11, 25]));
