function getCount(str) {
  let countVowels = 0;
  const vowels = ["a", "i", "u", "e", "o"];

  for (let char of str) {
    if (vowels.includes(char)) {
      countVowels++;
    }
  }
  return countVowels;
}

console.log(getCount("abracadabra"));
