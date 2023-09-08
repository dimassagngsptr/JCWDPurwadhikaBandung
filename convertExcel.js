function excelColumnToNumber(columnTitle) {
   let result = 0;

   for (let i = 0; i < columnTitle.length; i++) {
    let char = columnTitle.charAt(i);
    let charValue = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
    console.log(charValue);
    //   const char = columnTitle.charAt(i);
    //   const charValue = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
    //   result = result * 26 + charValue;
   }

   return result;
}

// Example usage:
const columnTitle = "A";
const columnNumber = excelColumnToNumber(columnTitle);
console.log(`Column "${columnTitle}" is column number ${columnNumber}`);
