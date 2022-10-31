let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

function solution() {
  let text = "";
  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(params) {
    text += params;
  }
  function removeStart(params) {
    text = text.slice(params);
  }
  function removeEnd(params) {
    text = text.slice(0, -params);
  }
  function print() {
    console.log(text);
  }
}
