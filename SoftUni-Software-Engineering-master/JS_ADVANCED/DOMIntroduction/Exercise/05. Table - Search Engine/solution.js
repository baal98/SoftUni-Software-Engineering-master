function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let namesElements = Array.from(document.querySelectorAll("tbody tr"));
    let searchedElement = document.querySelector("#searchField");

    let searchedText = searchedElement.value;
    namesElements.forEach((x) => x.className = '');

    let resultArray = namesElements
      .filter((x) => x.textContent.includes(searchedText))
      .map((x) => {
        x.className = "select";
      });

    searchedText.value = "";
  }
}
