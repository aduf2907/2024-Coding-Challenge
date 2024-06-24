//link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//day 55

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

console.log(duplicateCount("aabbcde"));
