let dates = (date) => {
   if (date === 0) {
      date = "Sunday";
   } else if (date === 1) {
      date = "Monday";
   } else if (date === 2) {
      date = "Tuesday";
   } else if (date === 3) {
      date = "Wednesday";
   } else if (date === 4) {
      date = "Thursday";
   } else if (date === 5) {
      date = "Friday";
   } else if (date === 6) {
      date = "Saturday";
   } else {
      date = "Nothing days";
   }
   return date == 0 || date == 6
      ? console.log(`now is  ${date}, and it's the weekend`)
      : console.log(`now is  ${date}, and it's the weekday`);
};

let now = new Date("20");
let days = now.getDay();
dates(days);
