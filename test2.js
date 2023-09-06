let intersection = (obj1, obj2) => {
   let res = {};
   // for (let key in obj1) {
   //    obj1[key] === obj2[key] ? (res[key] = obj1[key]) : "";
   // }

   Object.keys(obj1).map((key) => {
      if (obj1[key] === obj2[key]) res[key] = obj1[key];
   });
   return res;
};
console.log(intersection({ a: 1, b: 2 }, { a: 1, c: 3, b: 2 }));
