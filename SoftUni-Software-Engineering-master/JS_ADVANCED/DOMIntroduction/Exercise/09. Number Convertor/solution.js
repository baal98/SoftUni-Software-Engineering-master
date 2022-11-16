function solve() {
  let newOptions = document.getElementById("selectMenuTo");
  let optionBinary = document.createElement("option");
  optionBinary.value = "binary";
  optionBinary.innerText = "Binary";

  let optionHexadecimal = document.createElement("option");
  optionHexadecimal.value = "hexadecimal";
  optionHexadecimal.innerText = "Hexadecimal";

  newOptions.appendChild(optionBinary);
  newOptions.appendChild(optionHexadecimal);

  function calculation() {
    let inputValue = document.getElementById("input").value;
    let selectedValue = document.getElementById("selectMenuTo").value;

    let result;
    if (selectedValue === "binary") {
      result = Number(inputValue).toString(2);
    } else if (selectedValue === "hexadecimal") {
      result = Number(inputValue).toString(16);
      result = result.toUpperCase();
    }

    document.getElementById("result").value = result;
  }
  let getButton = document.getElementsByTagName("button")[0];
  getButton.addEventListener("click", calculation);
}

// let number = 31;
// let hexStr = number.toString(input);
// console.log(hexStr);
