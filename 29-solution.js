//link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

//reverse itu ternyata bisa jalan kalau dianya array, makanya di split dulu

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"));
