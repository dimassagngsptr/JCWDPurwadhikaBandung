// function stock(price) {
//    let min = Math.min(...price);
//    let slice = price.slice(price.indexOf(min));
//    let max = Math.max(...slice);
//    return max - min;
// }
// let price = [7, 6, 4, 3, 1];
// console.log(stock(price));

function myFunc(arr) {
   let minValue = Math.min(...arr);
   let indexMin = arr.indexOf(minValue);
   let tempArr = arr.splice(indexMin, arr.length - indexMin);
   let maxValueTemp = Math.max(...tempArr);
   console.log({
      minValue,
      indexMin,
      tempArr,
      maxValueTemp,
   });

   return maxValueTemp - minValue;
}

console.log(myFunc([7, 1, 5, 3, 6, 4]));
