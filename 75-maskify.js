//link: https://www.codewars.com/kata/5412509bd436bd33920011bc
//ch: 44

function maskify(cc) {
  let result = "";
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      result += "#";
    } else {
      result += cc[i];
    }
  }
  return result;
}

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, "#");
// }

console.log(maskify(4556364607935616));
