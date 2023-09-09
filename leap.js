function isLeapYear(year) {
   // Leap years are divisible by 4
   // Except for years divisible by 100 but not by 400
    // if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    //     return 1
    // } else{
    //     return 0
    // }
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 1 : 0;
}

// Example usage:
console.log(isLeapYear(2000)) // Returns

// if (isLeapYear(yearToCheck)) {
//    console.log(`${yearToCheck} is a leap year.`);
// } else {
//    console.log(`${yearToCheck} is not a leap year.`);
// }
