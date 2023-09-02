// let arr = ["Purwadhika", "Jakarta", "Bandung"];
// let strJoin = arr.join(",");
// console.log(strJoin);

let str = (a, b) => {
   let arr = [];
   let str = "";
   let bJoin = b.join(" dan ");
   arr.push(a, bJoin);
   str += arr.join(",");
   return str;
};

console.log(str(["Purwadhika"], ["Bandung", "Jakarta", "Batam"]));
