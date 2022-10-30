function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

module.exports = sumMix;
