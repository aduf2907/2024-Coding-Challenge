//link: https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

// Function Declaration
// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   return dna.replace(/T/g, "U");
// }

// Function Ekspression
// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));
