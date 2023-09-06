let arr1 = [
   { name: "Student 1", email: "student1@mail.com" },
   { name: "Student 2", email: "student2@mail.com" },
];

let arr2 = [
   { name: "Student 1", email: "student1@mail.com" },
   { name: "Student 3", email: "student3@mail.com" },
];

// let filterArr = (a, b) => {
//    let merge = [...a, ...b];
//    return merge.filter(
//       (item, index, array) =>
//          index ==
//          array.findIndex((value) => item.name && item.email == value.email)
//    );
// };
// console.log(filterArr(arr1, arr2));

let merge = (a, b) => {
   let combined = [...a, ...b];
   let res = [];
   combined.map((item) => {
      let stringed = JSON.stringify(item);
      if (!res.includes(stringed)) res.push(stringed);
   });
   return res.map(item => JSON.parse(item));
};

console.log(merge(arr1, arr2));