//with sort function
function sortStringWithSortFunction(inputString) {
   const sortedArray = inputString.split("").sort();
   const sortedString = sortedArray.join("");
   return sortedString;
}

const inputString = "banana";
const sortedString = sortStringWithSortFunction(inputString);

console.log(`Sorted string using sort function: ${sortedString}`);

// without sort function
function sortStringWithoutSortFunction(inputString) {
   const characters = inputString.split("");
   for (let i = 0; i < characters.length; i++) {
      for (let j = i + 1; j < characters.length; j++) {
         if (characters[i] > characters[j]) {
            // Swap characters[i] and characters[j]
            const temp = characters[i];
            characters[i] = characters[j];
            characters[j] = temp;
         }
      }
   }
   const sortedString = characters.join("");
   return sortedString;
}

const inputString2 = "banana";
const sortedString2 = sortStringWithoutSortFunction(inputString2);

console.log(`Sorted string without using sort function: ${sortedString}`);
