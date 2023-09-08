let convert = (str) => {
   let result = 0;
   for (let i = 1; i < str.length; i++) {
       result += str[i];
      // result += str.charCodeAt(i)
   }
   return result
};

console.log(convert("A"))