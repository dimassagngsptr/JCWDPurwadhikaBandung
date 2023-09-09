function isAnagram(str1, str2) {
   // Remove whitespace and convert to lowercase
   const cleanedStr1 = str1.replace(/\s/g, "").toLowerCase();
   const cleanedStr2 = str2.replace(/\s/g, "").toLowerCase();

   // Check if the sorted versions of the cleaned strings are the same
   const sortedStr1 = cleanedStr1.split("").sort().join("");
   const sortedStr2 = cleanedStr2.split("").sort().join("");

   return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
// if (isAnagram(string1, string2)) {
//    console.log(`"${string1}" and "${string2}" are anagrams.`);
// } else {
//    console.log(`"${string1}" and "${string2}" are not anagrams.`);
// }
console.log(isAnagram(string1, string2));
