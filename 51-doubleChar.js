//link: https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     result += str[i];
//   }

//   return result;
// }

function doubleChar(str) {
  return [...str].map((el) => el + el).join(""); // bisa juga diubah ke arraynya pake split
}

console.log(doubleChar("abcd"));
