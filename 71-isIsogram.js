//link: https://www.codewars.com/kata/54ba84be607a92aa900000f1
//ch: 41

function isIsogram(str) {
  str = str.toLowerCase(); //dikecilin dulu semuanya
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
