let convertExcel = (columnTitle) => {
   let result = 0;

   for (let i = 0; i < columnTitle.length; i++) {
    let char = columnTitle.charAt(i);
    let charValue = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
      result = result * 26 + charValue;                                                                                                                                
   }

   return result;
}
console.log(convertExcel("AAA")); 


let myFunc = (str) => {
   let n = 0
   for(let i = 0; i < str.length; i++){
      n=str[i].charCodeAt() - 64 + n * 26
   }
   return n
}

console.log(myFunc("AAA"))