//link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2); // cari tengahnya

  if (length % 2 === 0) {
    //buat genap
    return s[middle - 1] + s[middle];
  } else {
    //buat ganjil
    return s[middle];
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("a"));
console.log(getMiddle("abc"));
