// let fill = (arr) => {
//    let odd = [];
//    let even = [];
//    for (let i = 0; i <= arr.length; i++) {
//       arr[i] % 2 == 0 ? odd.push(arr[i]) : even.push(arr[i]);
//    }
//    return [even.length, odd.length];
// };

// console.log(fill([1, 2, 3, 4, 5, 6]));

// function oddEven(arr) {
//    // Write your code here
//    let odd = [];
//    let even = [];
//    for (let i = 1; i < arr.length; i++) {
//       arr[i] % 2 == 0 ? odd.push(arr[i]) : even.push(arr[i]);
//    }
//    return [odd.length, even.length];
// }
// console.log(oddEven([5, 1, 3, 5, 7, 9]));

// let odd = 0;
// let even = 0;
// for (let i = 1; i < arr.length; i++) {
//    arr[i] % 2 == 0 ? odd++ : even++;
// }
// return [odd, even];

// let fill = (arr) => {
//    let odd = 0;
//    let even = 0;
//    for (let i = 1; i < arr.length; i++) {
//     // console.log(arr[i]);
//       if (arr[i] % 2 === 0) {
//          even++;
//       } else {
//          odd++;
//       }
//    }
//    return [odd, even];
// };
// console.log(fill([5, 1, 3, 5, 7, 9]));

// function countLowerCaseUpperCase(str) {
//   let lowercaseCount = 0;
//   let uppercaseCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= 'a' && char <= 'z') {
//       lowercaseCount++;
//     } else if (char >= 'A' && char <= 'Z') {
//       uppercaseCount++;
//     }
//   }

//   return [lowercaseCount, uppercaseCount];
// }

// const inputString = "Hello World!";
// const counts = countLowerCaseUpperCase(inputString);
// console.log(counts); // Output: [6, 3]

// let vowelCount = (word) => {
//    let vowels = "aeiouAEIOU";
//    let res = 0;

//    for (let i = 0; i < word.length; i++) {
//       vowels.includes(word[i]) ? res++ : "";
//       // //   if (vowels.includes(word[i])) {
//       //      res++;
//       //   }
//    }

//    return res;
// };

// console.log(vowelCount("Apple"));
let arr = [6,1,2,3,4,10,11];
let myFunc = (input) => {
   let res = 0;
   let high = input.sort((a, b) => b - a);
   for (let i = 0; i < high.length; i++) {
    high[i] == high[0] ? res += 1 : "";
    //   if (high[i] == high[0]) {
    //      res++;
    //   }
   }
   return [res];
};
console.log(myFunc(arr));
