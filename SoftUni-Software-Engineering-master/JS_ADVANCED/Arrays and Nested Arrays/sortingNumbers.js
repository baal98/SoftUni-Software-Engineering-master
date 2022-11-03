function sortingNumbers(params) {
  const arr = params.slice().sort((a, b) => a - b);
  const arrNew = [];

  if (params.length % 2 == 0) {
    for (let i = 0; i < (params.length - 1) / 2; i++) {
      arrNew.push(arr[i]);
      arrNew.push(arr[arr.length - 1 - i]);
    }
  } else {
    for (let i = 0; i < (params.length - 1) / 2 + 1; i++) {
      if (i == (params.length - 1) / 2) {
        arrNew.push(arr[i]);
        break;
      } else {
        arrNew.push(arr[i]);
        arrNew.push(arr[arr.length - 1 - i]);
      }
    }
  }

  return arrNew;
}
sortingNumbers([100, 0, -15, 4, 5]);