//link: https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
//ch: 40

// function monkeyCount(n){
//     let result = [];

//     for (let i = 1; i<= n; i++){
//         result.push(i);
//     }

//     return result;
// }

function monkeyCount(n) {
  return Array.from({ length: n }, (v, i) => i + 1);
}

console.log(monkeyCount(5));
