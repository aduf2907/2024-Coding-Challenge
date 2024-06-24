//link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
// day 55

function findOutlier(integers) {
  let evens = integers.filter((el) => el % 2 === 0);
  let odds = integers.filter((el) => el % 2 !== 0);

  return evens.length === 1 ? evens[0] : odds[0];
}
console.log(findOutlier([0, 1, 2]));
