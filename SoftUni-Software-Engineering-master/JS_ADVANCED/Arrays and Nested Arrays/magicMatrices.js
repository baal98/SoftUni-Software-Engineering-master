function magicMatrices(matrix) {
  let isEqual = true;
  let sumCurrent = 0;
  for (var i = 0; i < matrix.length - 1; i++) {
    sumCurrent = matrix[i].reduce(function (a, b) {
      return a + b;
    });
    let sumNext = matrix[i + 1].reduce(function (a, b) {
      return a + b;
    });
    if (sumCurrent != sumNext) {
      isEqual = false;
      break;
    }
  }

  const arrayColumn = (arr, row) => arr.map((x) => x[row]);

  for (let row = 0; row < matrix.length - 1; row++) {
    const currentCol = arrayColumn(matrix, row);
    let sumCurrentCol = currentCol.reduce(function (a, b) {
      return a + b;
    });;
    const nextCol = arrayColumn(matrix, row + 1);
    let sumNextCol = nextCol.reduce(function (a, b) {
      return a + b;
    });;

      if (sumCurrentCol != sumNextCol || sumNextCol != sumCurrent) {
        isEqual = false;
        break;
      }
  }
  return isEqual;
}
magicMatrices([
  [6, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);