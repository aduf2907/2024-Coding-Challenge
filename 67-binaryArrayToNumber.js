//link: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
//ch: 39

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2); // 2 nya itu angka biner kan bilangan basis-2
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
