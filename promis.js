const tryPromise = new Promise((resolve, reject) => {
   let isError = false;
   if (isError) reject("Error");
   else resolve("Success");
});

const asynAwait = async () => {
   console.log("satu");
   await tryPromise
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("finally done"));
   console.log("dua");
};
asynAwait();
