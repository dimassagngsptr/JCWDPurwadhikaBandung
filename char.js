let common = (str) => {
   let hasil = "";
   let maxSize = 1;
   str.split("").map((item) => {
      let count = str.split(item).length - 1;
      if (count > maxSize) {
         hasil = item;
         maxSize = count;
      }
   });
   return hasil;
}

console.log(common("Abcdefghijkkl"));
