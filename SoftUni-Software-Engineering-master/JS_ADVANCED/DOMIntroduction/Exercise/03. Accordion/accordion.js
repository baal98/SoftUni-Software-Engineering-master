function toggle() {
  let buttonElement = document.querySelector(".button");
  let textElement = document.querySelector("#extra");

  buttonElement.textContent =
    buttonElement.textContent === "More" ? "Less" : "More";
  textElement.style.display =
    textElement.style.display === "none" ? "block" : "none";
}