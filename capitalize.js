let str = "Hello World";
let cap = true;
let result = "";

for (let i = 0; i < str.length; i++) {
   if (cap == -true) {
      result += str.charAt(i).toUpperCase;
      cap = false;
   } else {
      result += str.charAt(i).toLowerCase;
   }
   if (str.charAt(i) === " ") {
      cap = true;
   }
}

