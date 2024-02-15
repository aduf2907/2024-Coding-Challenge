//link: https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;

//   const sortedArray = array.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = 1; i < sortedArray.length - 1; i++) {
//     result += sortedArray[i];
//   }
//   return result;
// }

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([]));
