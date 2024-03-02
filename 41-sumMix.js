//link: https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
  return x.reduce((acc, curr) => acc + +curr, 0); // +curr itu ngerubah string jadi angka
}

console.log(sumMix([9, 3, "7", "3"]));
