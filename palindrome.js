let str = "malall";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
   reverse += str.charAt(i);
}

console.log(
   reverse.toLowerCase() === reverse.toLowerCase()
      ? `${str} is palindrome`
      : `${str} is not palindrome`
);
