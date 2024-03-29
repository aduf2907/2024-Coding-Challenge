//link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
// ch: 48

function validatePIN(pin) {
  // Memeriksa panjang PIN
  if (pin.length === 4 || pin.length === 6) {
    // Memeriksa apakah setiap karakter adalah angka
    return pin.split("").every(function (char) {
      return !isNaN(char) && parseInt(char) >= 0 && parseInt(char) <= 9;
    });
  } else {
    return false;
  }
}

console.log(validatePIN("1234"));
console.log(validatePIN("123a"));
