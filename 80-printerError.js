//link: https://www.codewars.com/kata/56541980fa08ab47a0000040
//ch: 47

function printerError(s) {
  let error = s.split("").filter((char) => char < "a" || char > "m");

  return `${error.length}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
