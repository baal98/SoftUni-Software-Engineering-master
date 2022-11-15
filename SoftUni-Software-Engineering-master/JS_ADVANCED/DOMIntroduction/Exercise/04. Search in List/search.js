function search() {
  let searchedElement = document.querySelector("#searchText");
  let allLiElements = Array.from(document.querySelectorAll("li"));
  let searchText = searchedElement.value;

  allLiElements.forEach((e) => {
    e.style.fontWeight = "normal";
    e.style.textDecoration = "none";
  });
  let targetLis = allLiElements
    .filter((x) => x.textContent.includes(searchText))
    .map((x) => {
      x.style.fontWeight = "bold";
      x.style.textDecoration = "underline";
    });
  let resultElement = document.getElementById("result");
  resultElement.textContent = `${targetLis.length} matches found`;
}