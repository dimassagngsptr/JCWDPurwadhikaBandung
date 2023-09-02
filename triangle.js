// let numberTriangle = (height) => {
//    let currentNumber = "1";
//    for (let i = 1; i <= height; i++) {
//       let str = "";
//       for (let j = 0; j < i; j++) {
//          str += ` ${currentNumber.toString().padStart(2, "0")}`;
//          currentNumber++;
//       }
//       console.log(str);
//    }
// };

// console.log(numberTriangle(4));

let triangle = (number) => {
   let counter = 0;
   for (let i = 0; i <= number; i++) {
      let result = "";
      for (let j = 1; j <= i; j++) {
         counter++;
         result += `${counter < 10 ? "0" : " "}`;
      }
      console.log(result);
   }
};
triangle(4);
