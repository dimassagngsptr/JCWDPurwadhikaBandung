let bmi = (weight, height) => {
   let formula = weight / height ** 2;
   if (formula < 18.5) {
      console.log(`less weight`);
   } else if (formula >= 18.5 && formula <= 24.9) {
      console.log(`ideal`);
   } else if (formula >= 25 && formula <= 29.9) {
      console.log(`overheight`);
   } else if (formula >= 30 && formula <= 39.9) {
      console.log(`very overheight`);
   } else {
      console.log(`obesity`);
   }

   return formula;
};

console.log(bmi(80, 1.75));
