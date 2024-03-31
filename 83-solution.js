//link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
//ch: 49

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde"));
console.log(solution("samurai", "ai"));
