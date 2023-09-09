function highestLockerNumber(floorNumber) {
   if (floorNumber <= 0) {
      return [0, 0]; // Invalid input, no lockers
   }

   let totalLockers = 0;
   let lockerCount = 5; // Initial locker count for the 1st floor

   for (let floor = 1; floor <= floorNumber; floor++) {
      totalLockers += lockerCount;
      lockerCount = floor % 2 === 0 ? 6 : 7; // Update locker count based on floor number
   }

   return [floorNumber, totalLockers];
}

// Example usage:
const floorNumber = 3;
const result = highestLockerNumber(floorNumber);
console.log(result); // Output: [3, 18]
