class Queue {
   constructor(data) {
      this.data = data;
   }
   #timer() {
      return Math.ceil(Math.random() * 10) * 1000;
   }
   #excecute(data, sec) {
      return new Promise((resolve, reject) => {
         if (sec / 1000 <= 7) {
            setTimeout(() => {
               resolve(`${data} Done in ${sec / 1000} seconds`);
            }, sec);
         } else {
            setTimeout(() => {
               reject(`Request failed in 8 seconds`);
            }, 8000);
         }
      });
   }
   async start() {
      let i = 0;
      while (i < this.data.length) {
         await this.#excecute(this.data[i], this.#timer())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
         i++;
      }
   }
}
module.exports = Queue;
