//link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// function spinWords(string) {
//   let kata = string.split(" ");

//   for (let i = 0; i < kata.length; i++) {
//     if (kata[i].length >= 5) {
//       kata[i] = kata[i].split("").reverse().join("");
//     }
//   }
//   return kata.join(" ");
// }

function spinWords(string) {
  return string
    .split(" ")
    .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Wellcome"));
