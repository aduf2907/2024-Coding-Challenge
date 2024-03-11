//link: https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps(sheep) {
//   let count = 0;

//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       count++;
//     }
//   }

//   return count;
// }

const countSheeps = (sheep) => sheep.filter(Boolean).length; //length biar tau ada berapa banyaknya

console.log(countSheeps([undefined, null, false, true]));
