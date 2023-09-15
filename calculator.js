let kalkulator = (cal) => {
   alert(`Selamat datang di kalkulator`);
   let isTrue = true;
   while (isTrue) {
      function input() {
         let inputMenu = prompt(`Pilih menu: 
        1: Penjumlahan
        2: Pengurangan
        3: Pembagian
        4: Perkalian
        5: Pangkat
        6: Akar pangkat 2
        7: Akar pangkat 3`);
         if (inputMenu === "1") {
            return sum();
         } else if (inputMenu === "2") {
            return substrac();
         } else if (inputMenu === "3") {
            return division();
         } else if (inputMenu === "4") {
            return multiple();
         } else if (inputMenu === "5") {
            return rank();
         } else if (inputMenu === "6") {
            return roots();
         } else if (inputMenu === "7") {
            return roots3();
         } else {
            alert("Invalid input");
            return input();
         }
      }

      function sum() {
         let sum = prompt(`input number 1
         0: Kembali ke menu awal`);
         if (sum === "0") {
            return input();
         } else {
            let sum2 = prompt(`input number 2`);
            let result = parseInt(sum) + parseInt(sum2);
            alert(`${sum} + ${sum2} = ${result}`);
            return false;
         }
      }

      function substrac() {
         let subs = prompt(`input number 1
         0: Kembali ke menu awal`);
         if (subs === "0") {
            return input();
         } else {
            let subs2 = prompt(`input number 2`);
            let result = parseInt(subs) - parseInt(subs2);
            alert(`${subs} - ${subs2} = ${result}`);
            return false;
         }
      }
      function division() {
         let division = prompt(`input number 1 
         0: Kembali ke menu awal`);
         if (division === "0") {
            return input();
         } else {
            let division2 = prompt(`input number 2`);
            let result = parseInt(division) / parseInt(division2);
            alert(`${division} / ${division2} = ${result}`);
            return false;
         }
      }
      function multiple() {
         let mult = prompt(`input number 1
         0: Kembali ke menu awal`);
         if (mult === "0") {
            return input();
         } else {
            let mult2 = prompt(`input number 2`);
            let result = parseInt(mult) * parseInt(mult2);
            alert(`${mult} x ${mult2} = ${result}`);
            return false;
         }
      }
      function rank() {
         let num = prompt(`input number 
         0: Kembali ke menu awal`);
         if (num === "0") {
            return input();
         } else {
            let result = num ** 2;
            alert(`pangkat 2 dari ${num} adalah ${result}`);
            return false;
         }
      }
      function roots() {
         let num = prompt(`input number 
         0: Kembali ke menu awal`);
         if (num === "0") {
            return input();
         } else {
            let result = Math.sqrt(num);
            alert(`akar pangkat 2 dari ${num} adalah ${result}`);
            return false;
         }
      }
      function roots3() {
         let num = prompt(`input number 
         0: Kembali ke menu awal`);
         if (num === "0") {
            return input();
         } else {
            let result = Math.cbrt(num);
            alert(`akar pangkat 3 dari ${num} adalah ${result}`);
            return false;
         }
      }

      input(cal);
      let conf = confirm(`Try Again?`);
      if (conf === true) {
         isTrue = true;
      } else {
         isTrue = false;
         alert("Thanks");
      }
   }
};
kalkulator();
