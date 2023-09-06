let obj = [
   {
      name: "David",
      age: 22,
   },
];
// let result = {};
// result[obj.name] = "name";
// result[obj.age] = "age";
// let switchProperties = (value) => {
//    let result = {};
//    for (const key in value) {
//       result[value[key]] = key;
//    }
//    return result;
// };

let myFunc = (input) => {
   let res = {};
   Object.keys(input[0]).map((key) => {
      res[input[0][key]] = key;
   });
   return res;
};
console.log(myFunc(obj));
