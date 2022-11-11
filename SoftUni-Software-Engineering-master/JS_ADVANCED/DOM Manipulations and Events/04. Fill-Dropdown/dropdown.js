function addItem() {
  let newItemTextElement = document.querySelectorAll('input[type="text"]')[0];
  let newItemValueElement = document.querySelectorAll('input[type="text"]')[1];
  let optionNode = document.createElement("option");
  optionNode.textContent =
    newItemValueElement.value + " " + newItemTextElement.value;
  let menuElement = document.querySelector("#menu");
  menuElement.appendChild(optionNode);

  newItemTextElement.value = "";
  newItemValueElement.value = "";
}
