// let sizeInput = (arr, max, input) => {
//    if (arr.length + input.length > max) {
//       console.log(`max size is ${max}`);
//       return arr;
//    } else {
//       arr.push(input);
//    }
//    return arr;
// };

// console.log(sizeInput([1, 2, 3], 4, [1, 2, 3]));

// let sizeInput = (arr, maxSize, input) => {
//    let arr2 = [];
//    if (arr.length + input.length > maxSize) {
//       arr2.push(arr, input);
//    }
//    let result = ``;
//    return arr2;
// };

// let arr1 = 123;
// let arr2 = 123;
// let max = 5;
// console.log(sizeInput(arr1, max, arr2));
// console.log(sizeInput([1, 2, 3], 5, [1, 2, 3]));

function myFunc(maxSize, ...numbers) {
   return numbers.slice(0, maxSize);
}
console.log(myFunc(5, 1, 2, 3, 4, 5, 6));
