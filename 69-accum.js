//link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
//ch: 41

// function accum(s) {
//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     result.push(format(s[i], i + 1));
//   }
//   return result.join("-");
// }

// function format(char, x) {
//   return char.toUpperCase() + char.toLowerCase().repeat(x - 1);
// }

function accum(s) {
  return s
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
