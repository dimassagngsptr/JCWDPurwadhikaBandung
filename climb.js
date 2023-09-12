let fib = (n) => {
   let res = [0, 1];

   for (let i = 2; i <= n + 1; i++) {
      res.push(res[i -1] + res[i -2])
   }

   return res;
}

console.log(fib(5));



// function climbStairs(n) {
//   if (n === 1) {
//     return 1; // If there's only one step, there's only one way to climb it.
//   }

//   const dp = new Array(n + 1); // Create an array to store the number of ways to reach each step.
//   dp[1] = 1; // There's one way to reach the first step.
//   dp[2] = 2; // There are two ways to reach the second step.

//   for (let i = 3; i <= n; i++) {
//     // Calculate the number of ways to reach each step based on the previous two steps.
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

// const n1 = 2;
// const n2 = 3;

// console.log(climbStairs(n1)); // Output: 2
// console.log(climbStairs(n2)); // Output: 3
