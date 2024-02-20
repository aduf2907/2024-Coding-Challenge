//link: https://www.codewars.com/kata/55a8a36703fe4c45ed00005b

// function multiple(x) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     return "BangBoom";
//   } else if (x % 3 === 0) {
//     return "Bang";
//   } else if (x % 5 === 0) {
//     return "Boom";
//   } else {
//     return "Miss";
//   }
// }

function multiple(x) {
  return x % 3 === 0 && x % 5 === 0
    ? "BangBoom"
    : x % 3 === 0
    ? "Bang"
    : x % 5 === 0
    ? "Boom"
    : "Miss";
}

console.log(multiple(30));
console.log(multiple(3));
console.log(multiple(98));
