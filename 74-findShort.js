//link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//ch: 43

// function findShort(s) {
//   const length = s.split(" ").map((l) => l.length);
//   return Math.min(...length);
// }

const findShort = (s) => Math.min(...s.split(" ").map((word) => word.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
