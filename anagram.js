function isAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    const charMap1 = {};
    const charMap2 = {};

    for (let i = 0; i < str1.length; i++) {
        charMap1[str1[i]] = (charMap1[str1[i]]  || 0) + 1;
        charMap2[str2[i]] = (charMap2[str2[i]]  || 0) + 1;
    }

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
    return true
}
console.log(isAnagrams("listen", "popop"));