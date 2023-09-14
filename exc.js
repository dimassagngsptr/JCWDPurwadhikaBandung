const Queue = require("./module.js");

let queue = new Queue([
   "Queue 1",
   "Queue 2",
   "Queue 3",
   "Queue 4",
   "Queue 5",
   "Queue 6",
   "Queue 7",
   "Queue 8",
   "Queue 9",
   "Queue 10",
]);
queue.start();
let i = 1
setInterval(()=> {
   console.log(`${i} seconds`)
   i++;
}, 1000)