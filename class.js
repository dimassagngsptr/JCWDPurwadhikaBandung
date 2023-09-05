// template object
class Student {
   name = "";
   #age = "";
   program = "";
   constructor(name, age, program) {
      this.name = name;
      this.#age = age;
      this.program = program;
   }
   greeting() {
      console.log(`Hello ${this.name}`);
   }
   getAge() {
      console.log(this.#age);
   }
}

const student1 = new Student("Andi", 25, "Digital Marketing");
const student2 = new Student("Budi", 20, "Data Science");
console.log(student1);
student1.greeting();
console.log(student2);
student2.greeting();
student1.getAge();

// encapsulation
class Student {
   constructor() {
      this.employeeName;
   }
   getEmployeeName() {
      return this.employeeName;
   }
   setEmployeeName(value) {
      this.employeeName = value;
   }
}
const employee1 = new Employee();
employee1.employeeName = "John";
console.log(employee1);

// inheritance pewarisan class dari parent's nya

class Gender {
   constructor(gender) {
      this.gender = gender;
   }
}

class Man extends Gender {
   constructor(name, age) {
      super("Male");
      this.name = name;
      this.age = age;
   }
}

class Woman extends Gender {
   constructor(name, age) {
      super("Female");
      this.name = name;
      this.age = age;
   }
}
let user1 = new Man("Andi", 20);
console.log(user1);
let user2 = new Woman("Diva", 20);
console.log(user2);

console.log(user1 instanceof Gender);
console.log(user1 instanceof Man);
console.log(user2 instanceof Woman);