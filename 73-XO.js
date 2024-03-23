//link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
//ch: 43

// function XO(str) {
//   const string = str.toLowerCase();
//   let countX = 0;
//   let countO = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "x") {
//       countX++;
//     } else if (string[i] === "o") {
//       countO++;
//     }
//   }

//   return countX === countO;
// }

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((o) => o === "o").length
  );
};

console.log(XO("xxOo"));
console.log(XO("Oo"));
console.log(XO("oom"));
console.log(XO("xo"));
console.log(XO("xxxm"));
