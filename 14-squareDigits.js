//link : https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

function squareDigits(num) {
  return Number(
    // di wrap pake number biar hasil akhirnya balik lagi ke number
    num
      .toString() // kalo pake function dibawah harus dikonversi ke string dulu
      .split("")
      .map((val) => val * val)
      .join("")
  );
}
console.log(squareDigits(2112));
