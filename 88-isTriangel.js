//link : https://www.codewars.com/kata/56606694ec01347ce800001b
// day 53

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

console.log(isTriangle(1, 2, 2));
