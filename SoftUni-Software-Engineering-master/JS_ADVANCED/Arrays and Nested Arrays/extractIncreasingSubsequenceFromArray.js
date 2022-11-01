function extractIncreasingSubsequenceFromArray(params) {
  const array = [];

  for (let i = 0; i < params.length; i++) {
    const currentNum = array[array.length - 1];
    if (i == 0) {
      array.push(params[i]);
    } else if (params[i] > currentNum) {
      array.push(params[i]);
    }
  }
  return array;
}
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
