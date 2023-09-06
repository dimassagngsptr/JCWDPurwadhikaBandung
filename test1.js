let obj1 = {
   name: "Dimas",
   age: 22,
};
let obj2 = {
   name: "Dimas",
   age: 22,
};

let compare = (a, b) => {
   let sortA = {};
   let sortB = {};
   Object.keys(sortA)
      .sort()
      .map((item) => (sortA[item] = a[item]));
   Object.keys(sortB)
      .sort()
      .map((item) => (sortA[item] = b[item]));
   return JSON.stringify(sortA) === JSON.stringify(sortB);
};
console.log(compare(obj1, obj2));
