function filterList(arr) {
  const filter = arr.filter((input) => {
    if (typeof input === "number") {
      return input;
    }
  });
  return filter;
}
filterList();
module.exports = filterList;
