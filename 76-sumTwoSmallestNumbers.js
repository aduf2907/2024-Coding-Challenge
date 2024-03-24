//link: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
//ch: 44

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
