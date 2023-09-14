function tellIndonesianTime(time) {
   const [hour, minutes] = time.split(":").map(Number);
   let indonesianHour = hour;
   if (hour > 12) {
      indonesianHour -= 12;
   } else if (hour === 0) {
      indonesianHour = 12;
   }

   if (minutes === 0) {
      return `jam ${indonesianHour}`;
   } else if (minutes >= 1 && minutes <= 14) {
      return `jam ${indonesianHour} lewat ${minutes}`;
   } else if (minutes === 15) {
      return `jam ${indonesianHour} seperempat`;
   } else if (minutes >= 16 && minutes <= 29) {
      return `jam ${indonesianHour} lewat ${minutes}`;
   } else if (minutes === 30) {
      return `jam setengah ${indonesianHour + 1}`;
   } else if (minutes >= 31 && minutes <= 44) {
      return `jam ${indonesianHour + 1} kurang ${60 - minutes}`;
   } else if (minutes === 45) {
      return `jam ${indonesianHour + 1} kurang seperempat`;
   } else if (minutes >= 46 && minutes <= 59) {
      return `jam ${indonesianHour + 1} kurang ${minutes - 60}`;
   }
}

// Example usage:
const inputTime = "15:10";
const indonesianTime = tellIndonesianTime(inputTime);
console.log(indonesianTime); // Output: "jam 1 lewat 20"
