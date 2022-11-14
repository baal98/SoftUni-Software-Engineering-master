function solve() {
  let elementText = document.querySelector("#text");
  let text = elementText.value;

  let elementNamingConvention = document.querySelector("#naming-convention");
  let namingConvention = elementNamingConvention.value;

  let result = applyNamingConvention(text, namingConvention);
  let resultElement = document.querySelector("#result");

  resultElement.textContent = result;

  function applyNamingConvention(input, convention) {
    let result = "";

    if (convention == "Camel Case") {
      result = input
        .toLowerCase()
        .split(" ")
        .map((x, i) => (i !== 0 ? x[0].toUpperCase() + x.slice(1) : x))
        .join("");

      return result;
    } else if (convention == "Pascal Case") {
      result = input
        .toLowerCase()
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join("");

      return result;
    } else {
      return "Error!";
    }
  }
}