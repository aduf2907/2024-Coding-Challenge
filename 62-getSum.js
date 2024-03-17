//link: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
//ch: 38

function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    let sum = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    for (let i = start; i <= end; i++) {
      sum += i;
    }

    return sum;
  }
}

console.log(getSum(1, 3));
console.log(getSum(1, 1));
console.log(getSum(0, -1));
console.log(getSum(5, -1));
