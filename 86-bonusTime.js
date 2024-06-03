//link : https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
// day 51

function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}

console.log(bonusTime(60000, false));
