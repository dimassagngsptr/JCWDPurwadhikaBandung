let combine = (arr1, arr2) => {
   // return arr1.concat(arr2);
   return [...arr1, ...arr2]; //spreadoperator
};
console.log(combine(["a", "b", "c"], ["d", "e", "f"]));
