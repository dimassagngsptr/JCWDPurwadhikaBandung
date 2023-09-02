let arr = ["a", "b", "c", "d"];
let arr2 = new Array("a", "b", "c", "d");
console.log(arr);
console.log(arr2);

console.log(arr[2]);

let data = [1, 2, 3];

data.push(4); //menambahkan data arr dari belakang
data.unshift(0); //menambahkan data arr dari depan

// menghapus data dari depan dan belakang
data.pop(4);
data.shift(0);
console.log(data);

// konversi string ke Array
let str = "Hello world";
let strSplit = str.split(" ");
console.log(strSplit);
console.log(strSplit.length);
// konversi array ke string
let strJoin = strSplit.join("-");
console.log(strJoin);

// sort
let students = ["John", "Andy", "Donna", "Doni"];
console.log(students.sort());
console.log(students.sort().reverse());

let nilai = [80, 100, 90];

nilai.sort((a, b) => a - b); // ascending order
nilai.sort((a, b) => b - a); // descending order
console.log(nilai);

let kota = ["New York", "Washington", "Dallas", "Texas"];

// looping array for each
kota.forEach((item) => {
   console.log(item);
});

// looping array map
kota.map((item) => {
   console.log(item);
});

// looping array map menggunakan 2 parameters 1.Item dan 2.Index untuk mengetahui item dalam array ada di index berapa
kota.map((item, index, arr) => {
   console.log(`${item} ada di index ke ${index} dalam array [${arr}]`);
});

let age = [20, 30, 40, 60, 70]; //filter age >20

// console.log(age.filter((item) => item > 30));
console.log(age.find((element) => element > 20));

// looping for of
let fruits = ["apple", "orange", "plum"];

for (let item of fruits) {
   console.log(item);
}

for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}