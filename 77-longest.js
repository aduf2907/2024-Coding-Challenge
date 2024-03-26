//link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
//ch: 45

function longest(s1, s2) {
  let result = new Set([...s1, ...s2]); //dijadiin set biar ngehilangin yg duplikat

  return [...result].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
