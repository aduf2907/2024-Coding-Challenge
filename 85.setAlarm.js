//link: https://www.codewars.com/kata/58649884a1659ed6cb000072
//ch: 51

// function setAlarm(employed, vacation) {
//   if (employed) {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     if (vacation) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(true, true));
