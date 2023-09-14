let calculator = (a, b, callback) => {
   callback(a + b);
};
let displayer = (something) => {
   console.log(something);
};

calculator(5, 10, displayer);
