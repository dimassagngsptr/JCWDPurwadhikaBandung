// function rotateArray(arr) {
//    // Write your code here
//    let res = [];
//    for (let i = arr.length - 1; i >= 0; i--) {
//       res.push(arr[i]);
//    }
//    let arr2 = res.slice(2).sort((a, b) => a - b);
//    console.log(arr2);
//    console.log(res)
// }
// console.log(rotateArray([1, 2, 3, 4, 5]));

function rotateArray(arr, k) {
   // Write your code here
   //    let res = [];
   //    for (let i = arr.length - 1; i >= 0; i--) {
   //       res.push(arr[i]);
   //    }
   //    let arr2 = res.slice(k).sort((a, b) => a - b);
   //    let arr3 = res.slice(0, k);
   //    console.log([...arr3, ...arr2]);


   let result = arr.slice(-2)

}

rotateArray([1,0,0,1], 2);
