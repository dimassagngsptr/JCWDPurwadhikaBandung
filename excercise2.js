// buat class train
/*
    -masinis duduk paling depan
    - maksimal 10 penumpang
    -tidak boleh ada penumpang dengan nama yang sama
    -penumpang mengisi urutan kursi dari depan berurutan
    -penumpang bisa keluar kereta
    -penumpang baru mengisi kursi kosong terlebih dahulu sebelum ke kursi belakang

*/

class Train {
   kursi = ["Masinis", "Budi", undefined, "Jhon", "Dimas"];

   tambahPenumpang(nama, kursi, max = 5) {
    if(this.kursi.length > max){
        console.log("Train over capacity")
        return
    }
      if (this.kursi.length == 0) {
         this.kursi.push(nama);
         return this.kursi;
      } else {
         for (var i = 0; i < this.kursi.length; i++) {
            if (this.kursi[i] == undefined) {
               this.kursi[i] = nama;
               return this.kursi;}
            // } else if (this.kursi.length >= max){
            //     console.log("Train over capacity")
            //     return
            // }
            else if (this.kursi[i] === nama) {
               console.log(`${nama} sudah ada didalam kereta`);
               return this.kursi;
            } else if (i == this.kursi.length - 1) {
               this.kursi.push(nama);
               return this.kursi;
            }
         }
      }
   }

   removePenumpang(nama, kursi) {
      if (this.kursi.length == 0) {
         console.log(`kereta masih kosong`);
      } else {
         for (let i = 0; i < this.kursi.length ; i++) {
            if (this.kursi[i] == nama) {
               this.kursi[i] = undefined;
               return this.kursi;
            } else if (this.kursi[i] != nama) {
               console.log(`${nama} tidak ada didalam kereta`);
               return this.kursi;
            }
         }
      }
   }
}

let train = new Train();
train.tambahPenumpang("andi");
train.tambahPenumpang("a");
train.tambahPenumpang("b");
train.tambahPenumpang("c");
train.tambahPenumpang("d");
train.tambahPenumpang("e");


console.log(train.kursi);
