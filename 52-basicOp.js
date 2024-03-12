//link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// ch: 34

/* function basicOp(operation, value1, value2) {
  let result = 0;

  if (operation === "+") {
    result = value1 + value2;
  } else if (operation === "-") {
    result = value1 - value2;
  } else if (operation === "*") {
    result = value1 * value2;
  } else if (operation === "/") {
    result = value1 / value2;
  }

  return result;
} */

/* function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
} */

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7));
