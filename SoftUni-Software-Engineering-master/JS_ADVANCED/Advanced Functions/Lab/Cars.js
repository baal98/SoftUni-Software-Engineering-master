function solution(commands) {
  const collection = {};

  const actions = {
    create,
    createInherit,
    set,
    print,
  };

  for (let cmd of commands) {
    const tokens = cmd.split(" ");
    const action = tokens[0];
    const name = tokens[1];
    if (action == "create" && tokens.length == 2) {
      actions[action](name);
    } else if (action == "create" && tokens.length == 4) {
      const parentName = tokens[3];
      actions["createInherit"](name, parentName);
    } else if (action == "set") {
      const [key, value] = [tokens[2], tokens[3]];
      actions[action](name, key, value);
    } else {
      actions[action](name);
    }
  }

  function create(name) {
    collection[name] = {};
  }
  function createInherit(name, parentName) {
    collection[name] = {
      parent: parentName,
    };
  }
  function set(name, key, value) {
    collection[name][key] = value;
  }
  function print(name) {
    let result = [];
    for (const [key, value] of Object.entries(collection[name])) {
      if (key != "parent") {
        result.push(`${key}:${value}`);
      }
    }
    if (collection[name]["parent"]) {
      const parentName = collection[name]["parent"];
      for (const [key, value] of Object.entries(collection[parentName])) {
        if (key != "parent") {
          result.push(`${key}:${value}`);
        }
      }
    }
    console.log(result.join(","));
  }
}

solution([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);

solution([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);
