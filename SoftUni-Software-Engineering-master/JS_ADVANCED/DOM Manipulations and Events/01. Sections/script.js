function create(words) {
  let divElement = document.querySelector("#content");

  for (const word of words) {
    let pElement = document.createElement("p");
    pElement.innerHTML = `<p>${word}</p>`;
    pElement.style.display = "none";
    let div = document.createElement("div");
    div.appendChild(pElement);
    divElement.appendChild(div);
    div.addEventListener(
      "click",
      (e) => (e.target.firstElementChild.style.display = "block")
    );
  }
  //   function is the samw as anonimous function
  //   function displayContent(e) {
  //     e.target.firstElementChild.style.display = "block";
  //   }
}