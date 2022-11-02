function newFnc(arr, num) {
  let newArr = arr;
  let step = num;
  let newArr1 = [];
  for (let i = 0; i < arr.length; i += num) {
    newArr1.push(arr[i]);
  }
  return newArr1;
}
newFnc(["1", "2", "3", "4", "5"], 6);
