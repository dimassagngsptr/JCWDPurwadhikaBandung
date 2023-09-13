// let pascal = (num) => {
//    num <= 0 ? console.log([]) : "";
//    let result = [0];
//    for (let i = 1; i < num; i++) {
//       let prev = result[i - 1];
//       let newPrev = [1];
//       for (let j = 1; j < i; j++) {
//          newPrev.push(prev[j - 1] + prev[j]);
//       }
//       newPrev.push(1);
//       result.push(newPrev);
//    }
//    return result;
// };
// console.log(pascal(5));

function pascal(n) {
   let res = [];
   for (let i = 1; i <= n; i++) {
      let arr = [];
      for (let j = 0; j < i; j++) {
         if (j == 0 || j == i - 1) {
            // depan & belakang selalu 1
            arr.push(1);
         } else {
            arr.push(res[i - 2][j - 1] + res[i - 2][j]);
         }
      }
      res.push(arr);
   }
   return res;
}

console.log(pascal(6));
