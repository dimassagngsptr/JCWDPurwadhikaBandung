let array = ["a", "b", "c", "a", "b"];

let duplicate = (array) => {
   var same = [];
   for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (same.indexOf(value) !== -1) {
         return same;
      }
      same.push(value);
   }
   return same;
};
console.log(duplicate(array));

// scnd task
