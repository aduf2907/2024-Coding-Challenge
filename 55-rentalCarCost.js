//link: https://www.codewars.com/kata/568d0dd208ee69389d000016
//ch: 35

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(7));
