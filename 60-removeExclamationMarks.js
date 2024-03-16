//link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
//ch: 37

// function removeExclamationMarks(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "!") {
//       result += s[i];
//     }
//   }
//   return result;
// }

function removeExclamationMarks(s) {
  return s.split("!").join("");
}

console.log(removeExclamationMarks("Hello World!"));
