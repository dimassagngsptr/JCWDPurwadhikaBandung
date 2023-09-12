function findFloorNumber(roomNumber) {
   let floor = 1;
   let roomCount = 5; 

   while (roomNumber > roomCount) {
      roomNumber -= roomCount;
      floor++;
      if (floor % 2 === 0) {
        roomCount = floor * 6
      } else {
        roomCount = floor * 7
      }
   } 

   return [floor];
}

// Example usage:
const roomNumber = 49;
const floorNumber = findFloorNumber(roomNumber);
console.log(floorNumber); // Output: [8]

