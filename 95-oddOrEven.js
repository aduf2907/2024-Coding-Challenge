//link : https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// day 59

function oddOrEven(array) {
  //enter code here
  return array.reduce((a, b) => a + b) % 2 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 5]));
