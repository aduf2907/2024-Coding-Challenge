//link: https://www.codewars.com/kata/526571aae218b8ee490006f4
//day 54

// var countBits = function (n) {
//   let count = 0;
//   n.toString(2)
//     .split("")
//     .forEach((el) => {
//       if (el === "1") {
//         count++;
//       }
//     });
//   return count;
// };

// var countBits = function (n) {
//   const binary = n.toString(2);
//   return [...binary].filter((el) => el === "1").length;
// };

var countBits = function (n) {
  return n.toString(2).split("0").join("").length;
};

console.log(countBits(4));
