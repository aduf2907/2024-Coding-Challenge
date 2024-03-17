//link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038
// ch: 38

function dnaStrand(dna) {
  return dna.replace(/./g, function (match) {
    // bagian /./g buat ngecocokin setiap karakter stringnya
    switch (match) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
      default:
        return match;
    }
  });
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("AAAAA"));
