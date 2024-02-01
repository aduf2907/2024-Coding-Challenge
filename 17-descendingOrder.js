//link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// function descendingOrder(n) {
//   return Number(
//     n
//       .toString()
//       .split("")
//       .map(Number)
//       .sort(function (a, b) {
//         return b - a;
//       })
//       .join("")
//   );
// }

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(123456789));
