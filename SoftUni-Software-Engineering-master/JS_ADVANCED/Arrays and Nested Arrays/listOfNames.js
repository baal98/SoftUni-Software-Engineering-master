function listOfNames(params) {
  const array = params.sort((a, b) => a.localeCompare(b));

  const arrNew = [];
  for (let i = 0; i < array.length; i++) {
    arrNew.push(`${i + 1}.${array[i]}`);
  }
  return arrNew.join("\n");
}
listOfNames(["John", "bob", "Christina", "Ema"]);
