//link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
//ch: 35

function abbrevName(name) {
  return name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("Sam Harris"));
