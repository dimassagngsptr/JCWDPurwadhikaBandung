// const lockersPerFloor = [5, 6, 7, 5, 6, 7];
// let highestLocker = 0;
// for (let i = 0; i < floor; i++) {
//    highestLocker += lockersPerFloor[i % 3];
// }

// return [floor, highestLocker];

let locker = (floor) =>{
   let lockerPerFloor = [5,6,7,5,6,7]
   let high = 0
   for (let i= 0; i < floor; i++) {
      high += lockerPerFloor[i % 3];
   }
   return [floor, high];
}
console.log(locker(1))