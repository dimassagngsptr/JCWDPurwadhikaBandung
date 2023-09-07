class Employee {
   name = "";
   hour = 0;
   constructor(name) {
      this.name = name;
   }

   // addName(name) {
   //    this.name = name;
   // }
   addWork(hour) {
      hour < 0 ? console.log("Tidak bekerja") : (this.hour = hour);
   }
}

class FullTime extends Employee {
   getSalary() {
      return this.hour <= 6
         ? this.hour * 100000
         : (this.hour - 6) * 75000 + 600000;
   }
}

class PartTime extends Employee {
   getSalary() {
      return this.hour <= 6
         ? this.hour * 50000
         : (this.hour - 6) * 30000 + 300000;
   }
}

let fulltime1 = new FullTime("Dimas");
// fulltime1.addName("Dimas");
fulltime1.addWork(7);
console.log(fulltime1);
console.log(fulltime1.getSalary());
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      