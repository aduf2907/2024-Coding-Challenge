//link: https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  let result = numbers.split(" ").map(Number);
  return `${Math.max(...result)} ${Math.min(...result)}`; // pake ... (spread) biar kepisah jadi individual gak jadi satu kesatuan gth
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
