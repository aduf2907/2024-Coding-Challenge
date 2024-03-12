//link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// ch: 34

function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

console.log(digitize(35231));
