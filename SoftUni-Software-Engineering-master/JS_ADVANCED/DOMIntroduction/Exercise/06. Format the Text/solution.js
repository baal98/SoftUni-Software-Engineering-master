function solve() {
  let inputElement = document.querySelector("#input");

  let inputAsArray = inputElement.value
    .split(".")
    .filter((x) => x !== '')
    .map((x) => x + ".");

  let paragraphRoof = Math.ceil(inputAsArray.length / 3);

  let outputElement = document.querySelector("#output");

  for (let i = 0; i < paragraphRoof; i++) {
    outputElement.innerHTML += `<p>${inputAsArray.splice(0, 3).join("")}</p>`;
  }
}
