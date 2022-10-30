function countTruthy(arr) {
  const count = arr.filter((element) => {
    if (element > 0) {
      return element;
    }
  });
  return console.log(count.length);
}
countTruthy(["", 3, 0, 30, 7]);
module.exports = countTruthy;
