// buat function konversi ke template phone number ex : 12345678 => '123-456-789'
let phoneNumber = (number) => {
   let formatNumber =
      number.length < 0
         ? console.log(new Error())
         : `(${number.slice(0, 3)})-${number.slice(3, 6)}-${number.slice(
              6
           )}`;
   return formatNumber;
};

console.log(phoneNumber("1234567890"));

let phone = (input) => {
   let temp = "(xxx)-xxx-xxxx"
   input.split("").map(item => {
      temp = temp.replace("x", item)
      // console.log(temp)
   })
   return temp
};
console.log(phone("1234567890"))