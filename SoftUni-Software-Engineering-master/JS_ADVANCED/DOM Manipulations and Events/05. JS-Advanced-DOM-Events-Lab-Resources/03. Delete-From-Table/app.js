function deleteByEmail() {
  const input = document.getElementsByName('email')[0].value;
  const rows = document.querySelectorAll('tbody tr');
  let isFound = false;

  for (let row of rows) {
      if (row.textContent.includes(input) && input != '') {
          row.remove();
          isFound = true;
      }
  }

  const output = document.getElementById('result');
  if (isFound) {
      output.textContent = 'Deleted.'
  } else {
      output.textContent = 'Not found.'
  }
}
// function deleteByEmail() {
//   let searchedText = document.querySelector("input").value.toLowerCase();
//   let rowsToSearch = Array.from(document.querySelectorAll("tbody tr > td"));
//     let isFound = false;
//     let resultElement = document.querySelector("#result");

//     if (rowsToSearch.length === 0) {
//         document.querySelector("input").value = "";
//         return resultElement.textContent = 'Nothing to delete';
//     }
//   for (let i = 0; i < rowsToSearch.length; i += 2) {
//     let tdRow = document.querySelector("td");
//     let name = rowsToSearch[i].textContent.toLowerCase();
//     let email = rowsToSearch[++i].textContent.toLowerCase();
//     if (name === searchedText || email === searchedText) {
//       tdRow.parentElement.remove();
//       isFound = true;
//     }
//     document.querySelector("input").value = "";
//     if (isFound) {
//       resultElement.textContent = "Deleted";
//     } else {
//       resultElement.textContent = "Not Found";
//     }
//     }
// }
