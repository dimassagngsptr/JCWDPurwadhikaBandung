let myFunc =(a,b) => {
    let newA = a.split("").sort().join(" ");
    let newB = b.split("").sort().join(" ");
    return newA === newB
}
console.log(myFunc("anagram", "nagaram"))