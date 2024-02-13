//link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
  let result = "";
  let score = (s1 + s2 + s3) / 3;

  if (score < 60) {
    result += "F";
  } else if (score < 70) {
    result += "D";
  } else if (score < 80) {
    result += "C";
  } else if (score <= 90) {
    result += "B";
  } else if (score <= 100) {
    result += "A";
  }

  return result;
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
