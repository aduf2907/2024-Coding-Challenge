// link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript
// day 58

// function duplicateEncode(word) {
//   const lowerWord = word.toLowerCase();
//   let result = "";

//   for (let i = 0; i < lowerWord.length; i++) {
//     const char = lowerWord[i];

//     if (lowerWord.indexOf(char) === lowerWord.lastIndexOf(char)) {
//       result += "(";
//     } else {
//       result += ")";
//     }
//   }
//   return result;
// }

function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  return [...lowerWord]
    .map((char) =>
      lowerWord.indexOf(char) === lowerWord.lastIndexOf(char) ? "(" : ")"
    )
    .join("");
}

console.log(duplicateEncode("din"));
