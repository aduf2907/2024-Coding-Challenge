//link: https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

// cara lain
function countBy(x, n) {
  return [...Array(n)].map((_, n) => (n + 1) * x); // _ = el tapi karna gak dipake jadi ganti _ juga bisa
}

console.log(countBy(1, 10));
