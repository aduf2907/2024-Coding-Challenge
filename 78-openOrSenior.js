//link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
//ch: 45

// function openOrSenior(data) {
//   let result = [];

//   data.forEach((member) => {
//     if (member[0] >= 55 && member[1] > 7) {
//       result.push("Senior");
//     } else {
//       result.push("Open");
//     }
//   });
//   return result;
// }

const openOrSenior = (data) =>
  data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
