// let car = {
//    brand: "BMW",
//    model: "M135i xDrive",
//    price: 800000000,
// };

// let car2 = new Object({
//    brand: "BMW",
//    model: "M135i xDrive",
//    price: 800000000,
// });
// console.log(car.brand);
// console.log(car.model);

// console.log(car["brand"]);

// // Properties & methods

// let user = {
//    name: ["David"],
//    greet() {
//       console.log("Hello");
//    },
// };

// user.greet();
// // add properties
// user.age = 25;
// user.name.push("Budi");
// user.name.push("Dimas");
// console.log(user);

// // delete properties
// delete user.greet();
// console.log(user);

let person = {
   name: "Andi",
   age: 36,
   address: {
      city: "Bandung",
   },
};

// // error
// console.log(person.address.city);
// // optional chaining
// console.log(person.address?.city);

// accessing keys

// console.log(Object.keys(person));
// forin looping object
for (const key in person) {
   // access to values
   console.log(person[key]);
}

// getter and setter

let student = {
   firstName: "John",
   lastName: "Smith",

   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   },
   set fullName(value) {
      const splittedValue = value.split(" ");
      this.firstName = splittedValue[0];
      this.lastName = splittedValue[1];
   },
};
console.log(student.fullName);

// change value

student.fullName = "Alice Cooper";
console.log(student.fullName);

// array destructuring
let arr = ["Apple", "Lemon"];
let [a, b] = arr;
console.log(a);
console.log(b);

// object destructuring
let fruit = {
   name: "Apple",
   color: "red",
};
let {name, color} = fruit
console.log(name);
console.log(color);

let fruit2 = {
    price: 5000,
    quantity: 10,
}

// merge the objects
// spread operators
let fruits = {...fruit, fruit2}
console.log(fruits)

// Object.assign
let fruits2 = Object.assign(fruits, fruit2)
console.log(fruits2)