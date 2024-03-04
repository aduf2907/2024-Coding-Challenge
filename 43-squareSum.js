//link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers) {
//   let square = numbers.reduce((acc, curr) => {
//     return acc + curr ** 2;
//   }, 0);

//   return square;
// }

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  });
}

console.log(squareSum([1, 2]));
