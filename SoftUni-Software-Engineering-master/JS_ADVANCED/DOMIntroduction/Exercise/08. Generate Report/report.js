function generateReport() {
  let infoElement = document.querySelectorAll("input");
  let tableElement = document.querySelectorAll("tbody tr");

  let table = new Array(tableElement)[0];

  let output = [];

  for (let i = 0; i < table.length; i++) {
    let employeeInfo = {};
    for (let j = 0; j < infoElement.length; j++) {
      if (infoElement[j].checked == true) {
        let label = infoElement[j].name;
        let res = table[i].textContent
          .split("\n")
          .map((x) => x.trim(" "))
          .filter((x) => x != "")[j];
          employeeInfo[label] = res;
      }
    }
    output.push(employeeInfo);
  }
  let json = JSON.stringify(output);

  let outputElement = document.querySelector("#output");
  outputElement.textContent = json;
}

// function generateReport() {
//     let info = document.querySelectorAll('input');
//     let table = document.querySelectorAll('tbody tr');

//     let tableArray = new Array(table)[0];

//     let output = [];
//     for (let i = 0; i < table.length; i++) {
//         let employeeInfo = {}
//         for (let k = 0; k < info.length; k++) {
//             if (info[k].checked == true) {
//                 let label = info[k].name
//                 let res = tableArray[i].textContent.split("\n").map(x => x.trim(" ")).filter(x => x != "")[k]
//                 employeeInfo[label] = res
//             }
//         }
//         output.push(employeeInfo)
//     }

//     let outputResult = JSON.stringify(output)
//     let divOutput = document.getElementById('output')

//     divOutput.textContent = outputResult;
// }
