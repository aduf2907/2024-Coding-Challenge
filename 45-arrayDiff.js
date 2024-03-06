//link: https://www.codewars.com/kata/523f5d21c841566fde000009

// function arrayDiff(a, b) {
//   if (a.length === 0) return [];
//   if (b.length === 0) return a;

//   let returnArray = [];
//   a.forEach(function included(e) {
//     if (!b.includes(e)) {
//       returnArray.push(e);
//     }
//   });
//   return returnArray;
// }

function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([1, 2], [1]));
