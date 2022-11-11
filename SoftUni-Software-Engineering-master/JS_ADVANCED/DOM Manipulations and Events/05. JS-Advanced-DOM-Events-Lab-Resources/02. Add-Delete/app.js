function addItem() {
  const list = document.getElementById('items');
  const inputField = document.getElementById('newItemText');

  const newLi = document.createElement('li');
  newLi.textContent = inputField.value;

  const button = document.createElement('a');
  button.href = '#';
  button.textContent = '[Delete]';
  button.addEventListener('click', removeEl);

  newLi.appendChild(button);
  list.appendChild(newLi);

  function removeEl(ev) {
      const target = ev.target;
      target.parentNode.remove();
  }
  inputField.value = '';
}

// function addItem() {
//   // Create textElement from input box
//   let text = document.querySelector("#newItemText").value;

//   //checking if input box is empty and if it is not then continue, else return
//   // if (text.length === 0 || text.replace(/\s+/g, '').length == 0) return;
//   if (text.length === 0 || text.replace(/\s+/g, '').length == 0){ return;}

//   //creating textNode from TEXT.value and adding it to li element
//   let textNode = document.createTextNode(text);
//   let li = document.createElement("li");
//   li.textContent = text;

//   //get items Element and adding li element
//   let items = document.querySelector("#items");

//   //creating attribute Element and adding it name and link for functionality
//   let deleteButton = document.createElement("a");
//   deleteButton.appendChild(document.createTextNode("[Delete]"));
//   deleteButton.addEventListener("click", (e) => {
//     e.currentTarget.parentNode.remove();
//   });

//   //adding attribute Element to to list of items
//   li.appendChild(deleteButton);
//   items.appendChild(li);
//   //clear input field
//   document.querySelector("#newItemText").value = "";
// }
