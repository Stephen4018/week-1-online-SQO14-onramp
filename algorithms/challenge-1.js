function countTruthy(arr) {
  const count = arr.filter((element) => {
    if (element > 0) {
      return element;
    }
  });
  return count.length;
}
module.exports = countTruthy;
