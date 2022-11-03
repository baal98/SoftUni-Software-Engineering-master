function rotateArray(params, num) {
  let arr = params;
  const newArr = arr.slice();

  for (let i = 0; i < num; i++) {
    newArr.unshift(newArr.pop(newArr[arr.length]));
  }

  return newArr.join(' ');
}
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
