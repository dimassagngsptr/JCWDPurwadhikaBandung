// let locker = (floor) => {
//    let lockerPerFloor = [5, 6, 7, 5, 6, 7];
//    let high = 0;
//    for (let i = 0; i < floor; i++) {
//       high += lockerPerFloor[i % 3];
//    }
//    return [floor, high];
// };
// console.log(locker(1));

// let findFloorNumber = (room) => {
//    let lockerPerFloor = [5, 6, 7, 5, 6, 7];
//    let floor = 0;
//    for (let i = 0; i < room; i++) {
//       floor += lockerPerFloor[i % 6];
//    }
//    return [room, floor];
// };
// console.log(findFloorNumber(49));

// let findFloorNumber = (room) => {
//    let lockerPerFloor = [5, 6, 7, 5, 6, 7];
//    let floor = 0;
//    for (let i = 0; i < room; i++) {
//       floor += lockerPerFloor[i % 6];
//    }
//    return [room, floor];
// };
// console.log(findFloorNumber(49)); // Output: [49, 9]

// function findFloorNumber(roomNumber) {
//    let floor = 1;
//    let roomsOnFloor = 5; // Number of rooms on the current floor
//    let roomCount = 1; // Initialize the room count for the current floor

//    while (roomCount + roomsOnFloor < roomNumber) {
//       // Move to the next floor
//       floor++;
//       roomCount += roomsOnFloor;
//     //   roomsOnFloor = floor % 2 === 1 ? 6 : 7; // Update the room count for the next floor
//     if(floor === 1 ){

//     }
//    }

//    return floor ;
// }

// // Example usage:
// const roomNumber = 120;
// const floorNumber = findFloorNumber(roomNumber);
// console.log(
//    `Room number ${roomNumber} is located on the ${floorNumber} floor.`
// );

let findFloorNumber = (room) => {
   let lockerPerFloor = [5, 6, 7, 5, 6, 7];
   let floor = 0;
   let i = 0;

   while (room > lockerPerFloor [i % 3]) {
      room -= lockerPerFloor[i % 6];
      i++;
      floor++;
   }

   floor += Math.ceil(room / 5);
   return floor;
};

console.log(findFloorNumber(120)); // Output: 21

// let findFloorNumber = (room) => {
//    let lockerPerFloor = [5, 6, 7, 5, 6, 7];
//    let floor = 0;
//    for (let i = lockerPerFloor; i[i % 6] < room; i++) {
//       room -= lockerPerFloor[i % 6];
//       floor++;
//       console.log(room)
//    }
// //    floor += Math.ceil(room / 6);
//    return room;
// };
// console.log(findFloorNumber(120)); // Output: 21
