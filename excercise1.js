class Student {
   constructor(name, email, birtdate, score) {
      this.name = name;
      this.email = email;
      this.birtdate = birtdate;
      this.score = score;
   }
}

const student1 = new Student("Andi", "andi@gmail.com", "1995-01-01", 80);
const student2 = new Student("Andi", "andi@gmail.com", "1996-01-01", 80);
const student3 = new Student("Andi", "andi@gmail.com", "1997-01-01", 80);

const arrStudent = [student1, student2, student3];
console.log(arrStudent);

let convertAge = (date) => {
   let birthdate = new Date(date).getTime();
   let now = new Date(date).getTime();
   let diff = now - birthdate;
   return Math.floor(diff / (24 * 60 * 60 * 1000) / 365);
};

let calculate = (arr) => {
   let maxScore = Math.max(...arr.map((item) => item.score));
   let minScore = Math.min(...arr.map((item) => item.score));
   let avgScore =
      arr.map((item) => item.score).reduce((a, b) => a + b) / arr.length;
   return {
      score: {
         max: maxScore,
         min: minScore,
         avg: avgScore,
      },
   };
};
