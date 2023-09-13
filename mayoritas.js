// let major = (nums) => {
//     let res = null
//     let count = 0
//     for (const num of nums) {
//        count === 0
//           ? ((res = num), (count = 1))
//           : res === num
//           ? count++
//           : count--;
//     }
//    return res
// };
// console.log(major([2,2,1,1,1,2,2]));

let myFunc = (arr) => {
   return arr.filter(v => arr.filter(item => item == v).length > arr.length / 2)[0]
}
   console.log(myFunc([2,2,1,1,1,2,2]));
