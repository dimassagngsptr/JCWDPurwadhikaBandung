let aay = (str) => {
   let vocal = "aiueoAIUEO";
   return str
      .split(" ")
      .map((item) => {
         let firstChar = item[0];
         let secondChar = item[1];
         for (let i = 0; i < item.length; i++) {
         if (vocal.includes(firstChar)) {
            return "s" + item[i] + "way";
         } else if (!vocal.includes(firstChar) && !vocal.includes(secondChar)) {
            return item.slice(1) + firstChar + "ay ";
         } else {
            let res = "";
            let i = 0;
            while (i < item.length && !vocal.includes(item[i])) {
               res += item[i];
               i++;
            }
            return item.slice(i) + res + "ay "
         }
      }})
      .join(" ");
};
console.log(aay("Pig latin is cool !"));


