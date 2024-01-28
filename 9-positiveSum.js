//link: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let hasil = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      hasil += arr[i];
    }
  }
  return hasil;

  // return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0); // ini kalo pake reduce
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([]));
