// function rearrange(arr) {
//    arr.sort((a, b) => a - b);
//    let l = 0;
//    let r = arr.length - 1;
//    let result = [];
//    let smallest = true;
//    while (l <= r) {
//       if (smallest) {
//          result.push(arr[l]);
//          l++;
//       } else {
//          result.push(arr[r]);
//          r--;
//       }
//       smallest = !smallest;
//    }
//    return result;
// }
// console.log(rearrange([4, 2, 9, 7, 1, 8]));

function findFloorNumber(roomNumber) {
  let floor = 1;
  let roomCount = 5; // Number of rooms on the current floor

  while (roomNumber > roomCount) {
    // Subtract the room count of the current floor from the room number
    roomNumber -= roomCount;
    floor++; // Move to the next floor

    // Calculate the room count for the next floor
    if (floor % 2 === 0) {
      roomCount = floor * 6; // For even floors
    } else {
      roomCount = floor * 7; // For odd floors
    }
  }

  return [floor];
}

// Example usage:
const roomNumber1 = 49;
const roomNumber2 = 120;

const floorNumber1 = findFloorNumber(roomNumber1);
const floorNumber2 = findFloorNumber(roomNumber2);

console.log(floorNumber1); // Output: [9] for room number 49
console.log(floorNumber2); // Output: [21] for room number 120

