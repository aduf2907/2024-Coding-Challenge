// link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// function evenOrOdd(number) {
//   return number % 2 == 0 ? "Even" : "Odd";
// }

// arrow function
const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");

console.log(evenOrOdd(5));
