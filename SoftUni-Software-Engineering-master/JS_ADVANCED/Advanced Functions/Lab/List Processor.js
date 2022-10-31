function listProcessor(input) {
  let arr = [];
  let processor = {
    add,
    remove,
    print,
  };

  for (const el of input) {
    let [command, text] = el.split(" ");
    processor[command](text);
  }

  function add(string) {
     return arr.push(string);
  }
  function remove(string) {
     return arr = arr.filter((x) => x != string);
  }
  function print() {
    return console.log(arr.join(","));
  }
}
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
