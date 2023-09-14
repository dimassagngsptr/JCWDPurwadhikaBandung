let locker = (floor) => {
   let lockerPerFloor = [5, 6, 7, 5, 6, 7];
   let high = [];
   for (let i = 0; i < floor; i++) {
      high.push(i);
   }
   return [floor, high];
};
console.log(locker(5));


// let getClass = (floor) => {
//     let lockerPerFloor = 5
//     let res = []
//     if(floor == 1){
//         lockerPerFloor = lockerPerFloor
//     } else if(floor % 3){
//         lockerPerFloor = 6
//     } else {
//         lockerPerFloor = 7
//     }
//     for (let i = 1; i <= lockerPerFloor; i++) {
//        res.push(i)
//     }
//     res.unshift(floor)
//     return res
// }
// console.log(getClass(5));