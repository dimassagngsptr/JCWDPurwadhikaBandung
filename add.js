let adds = (arr, input) => {
   if (!arr.includes(input)) {
      arr.push(input);
   }
   return arr;
};
console.log(adds(["Purwadhika", "Bandung"], "Batam"));
