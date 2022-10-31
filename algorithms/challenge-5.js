function filterList(arr) {
  const filter = arr.filter((input) => {
    return typeof input === "number";
  });
  return filter;
}
module.exports = filterList;
