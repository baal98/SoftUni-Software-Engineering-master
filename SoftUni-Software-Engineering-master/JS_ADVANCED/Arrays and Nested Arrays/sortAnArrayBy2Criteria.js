function sortAnArrayBy2Criteria(params) {
  const arr = params.slice();
  const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return sortedArr.join("\n");
}
sortAnArrayBy2Criteria(["alpha", "betaq", "gmma"]);
