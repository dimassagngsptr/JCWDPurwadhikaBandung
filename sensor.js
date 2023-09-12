let sensor = (str) => {
   let dataSensor = ["anjing", "babi"];
   let result = [];
   str.split(" ").map((item) => {
      if (dataSensor.includes(item)) {
         result.push(
            item[0] + "*".repeat(item.length - 2) + item[item.length - 1]
         );
      } else {
         result.push(item);
      }
   });
   return result.join(" ");
};
console.log(sensor(""));
