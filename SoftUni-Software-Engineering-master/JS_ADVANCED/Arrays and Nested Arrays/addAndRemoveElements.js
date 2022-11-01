function addAndRemoveElements(params) {
  let arr = params;
  let counter = 0;
  const arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (arr[i] === "add") {
      arrNew.push(counter);
    } else if (arr[i] === "remove") {
      arrNew.pop();
    }
    }
    if (arrNew.length == 0) {
        return 'Empty';
    }
  return arrNew.join("\n");
}

addAndRemoveElements(["add", "add", "add", "add"]);
