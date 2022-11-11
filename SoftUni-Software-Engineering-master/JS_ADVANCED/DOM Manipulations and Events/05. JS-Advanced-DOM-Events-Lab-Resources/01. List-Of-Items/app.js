function addItem() {
    let text = document.querySelector('#newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(text));
    document.querySelector('#items').appendChild(li);
    // let delButtton = document.createElement('button');
    // delButtton.textContent = 'Delete';
    // delButtton.onclick = () => { document.querySelector('#items').removeChild(li) };
    // li.appendChild(delButtton);
    document.querySelector('#newItemText').value = '';
  } 



// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     document.getElementById("items").appendChild(li);
//       //clearing the input:
//     document.getElementById('newItemText').value = '';
//   } 
  