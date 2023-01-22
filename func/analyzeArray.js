function analyzeArray(arr) {
  if (arr.length == 0) return "Array is empty";

  let min = arr[0];
  let max = arr[0];
  const len = arr.length;

  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (isNaN(arr[i])) return "Array contains non-numeric value";

    sum += arr[i];

    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  const average = (sum / len).toFixed(2) * 1;

  return {
    average,
    min,
    max,
    length: len,
  };
}

module.exports = { analyzeArray };
