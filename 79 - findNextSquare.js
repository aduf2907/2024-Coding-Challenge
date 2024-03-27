//link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
//ch: 46

function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1) {
    return -1;
  } else {
    return (Math.sqrt(sq) + 1) ** 2;
  }
}

console.log(findNextSquare(121));
