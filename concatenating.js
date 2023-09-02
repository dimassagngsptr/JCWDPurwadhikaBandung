let concat = (arr) => {
   let comma = "";
   comma += arr.slice(0, -1);
   let result = `${comma}, and ${arr[arr.length - 1]}`;
   return result;
};
console.log(concat(["Purwadhika", "Bandung", "Jakarta", "Batam"]));
