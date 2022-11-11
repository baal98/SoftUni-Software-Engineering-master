function solve() {
  let inputElement = document.querySelector('#exercise :nth-child(2)');
  let tbodyElement = document.querySelector('table tbody');
  document
    .querySelector('#exercise :nth-child(3)')
    .addEventListener('click', function () {
      let inputText = inputElement.value;

      let objs = JSON.parse(inputText);

      for (let i = 0; i < objs.length; i++) {
        let trElement = document.createElement('tr');
        let tdElementImg = document.createElement('td');
        let tdElementTitle = document.createElement('td');
        let tdElementPrice = document.createElement('td');
        let tdElementFactor = document.createElement('td');
        let tdElementType = document.createElement('td');

        //add img
        let imgElement = document.createElement('img');
        console.log(objs[i].img);
        imgElement.setAttribute('src', objs[i].img);
        tdElementImg.appendChild(imgElement);
        trElement.appendChild(tdElementImg);

        //add title
        let titlePElement = document.createElement('p');
        titlePElement.textContent = objs[i].name;
        tdElementTitle.appendChild(titlePElement);
        trElement.appendChild(tdElementTitle);

        //add price
        let priceElement = document.createElement('p');
        priceElement.textContent = objs[i].price;
        tdElementPrice.appendChild(priceElement);
        trElement.appendChild(tdElementPrice);

        //add factor
        let factorElement = document.createElement('p');
        factorElement.textContent = objs[i].decFactor;
        tdElementFactor.appendChild(factorElement);
        trElement.appendChild(tdElementFactor);

        //add type
        let inputElementCheckbox = document.createElement('input');
        inputElementCheckbox.setAttribute('type', 'checkbox');
        //inputElementCheckbox.setAttribute('disabled', true);
        tdElementType.appendChild(inputElementCheckbox);
        trElement.appendChild(tdElementType);

        tbodyElement.appendChild(trElement);
      }

      console.log(objs);

      console.log(inputElement);

      console.log(tbodyElement);
    });


  let outputElement = document.querySelector('#exercise > :nth-child(5)');
  let outputButtonElement = document.querySelector('#exercise > :nth-child(6)');

  outputButtonElement.addEventListener('click', function () {
    let allRows = Array.from(document.querySelectorAll('.table tbody tr'));
    let selectedRows = allRows.filter((x) => x.querySelector('input:checked'));
    let rowNames = selectedRows
      .map((x) => x.querySelector('td:nth-of-type(2) p'))
      .map((x) => x.textContent)
      .join(', ');
    let str = '';
    str += `Bought furniture: ${rowNames}\n`;
    str += `Total price: ${selectedRows.reduce((acc, x) => acc += Number(x.querySelector('td:nth-of-type(3) p').textContent),0).toFixed(2)}\n`;
    let counter = 0;
    str += `Average decoration factor: ${selectedRows.reduce(
      (acc, x) => acc += Number(x.querySelector('td:nth-of-type(4) p').textContent) / selectedRows.length,0
    )}`;

    outputElement.textContent = str;
  });
}


// function solve() {
//   let inputFieldElement = document.querySelector(
//     "#exercise > textarea:nth-child(2)"
//   );
//   let generateButton = document.querySelector(
//     "#exercise > button:nth-child(3)"
//   );
//   generateButton.addEventListener("click", addNewItemRow);

//   let buyButton = document.querySelector("#exercise > button:nth-child(6)");
//   buyButton.addEventListener("click", checkOut);

//   let productArr = [];

//   function addNewItemRow() {
//     let inputObject = JSON.parse(inputFieldElement.value);
//     let parrentRow = document.querySelector(
//       "#exercise > div > div > div > div > table > tbody"
//     );
//     for (const rowObject of inputObject) {
//       let image = rowObject.img;
//       let name = rowObject.name;
//       let price = +rowObject.price;
//       let decorationFactor = +rowObject.decFactor;

//       let productObject = {
//         image: image,
//         name: name,
//         price: price,
//         decorationFactor: decorationFactor,
//       };

//       productArr.push(productObject);

//       let trElement = document.createElement("tr");

//       let imgElementImage = document.createElement("img");
//       imgElementImage.setAttribute("src", image);
//       let tdElementImage = document.createElement("td");
//       tdElementImage.appendChild(imgElementImage);
//       trElement.appendChild(tdElementImage);

//       let pElementName = document.createElement("p");
//       pElementName.textContent = name;
//       let tdElementName = document.createElement("td");
//       tdElementName.appendChild(pElementName);
//       trElement.appendChild(tdElementName);

//       let pElementPrice = document.createElement("p");
//       pElementPrice.textContent = price;
//       let tdElementPrice = document.createElement("td");
//       tdElementPrice.appendChild(pElementPrice);
//       trElement.appendChild(tdElementPrice);

//       let pElementDecorationFactor = document.createElement("p");
//       pElementDecorationFactor.textContent = decorationFactor;
//       let tdElementDecorationFactor = document.createElement("td");
//       tdElementDecorationFactor.appendChild(pElementDecorationFactor);
//       trElement.appendChild(tdElementDecorationFactor);

//       let newCheckBox = document.createElement("input");
//       newCheckBox.type = "checkbox";
//       let tdElementCheckBox = document.createElement("td");
//       tdElementCheckBox.appendChild(newCheckBox);
//       trElement.appendChild(tdElementCheckBox);

//       productObject.checkButton = newCheckBox;

//       parrentRow.appendChild(trElement);
//     }
//   }

//   function checkOut() {
//     let totalPrice = 0;
//     let decFactor = 0;
//     let outputProductArr = [];
//     let checkedProductCount = 0;
//     for (const product of productArr) {
//       if (product.checkButton.checked) {
//         outputProductArr.push(product.name);
//         totalPrice += product.price;
//         decFactor += product.decorationFactor;
//         checkedProductCount++;
//       }
//     }
//     let outputProductField = document.querySelector("#exercise > textarea:nth-child(5)");
//     let outputProductText = `Bought furniture: ${outputProductArr.join(", ")} \n\Total price: ${totalPrice.toFixed(2)}\n\Average decoration factor: ${(decFactor / checkedProductCount).toFixed(2)}`;
//     outputProductField.value = outputProductText;
//   }
// }
//example for working generateButton
// [{"name": "Painting picture", "img": "https://th.bing.com/th/id/R.9cc7b6224d641b00cf6dce5162bfe793?rik=zrdkXT00Swyteg&pid=ImgRaw&r=0", "price": 2000, "decFactor": 5.2}, {"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10}, {"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}, {"name": "Wardrobe", "img": "https://th.bing.com/th/id/R.2933e047f8de6201e6090890123a4dea?rik=ljNIfL4GXqpE2w&pid=ImgRaw&r=0", "price": 200, "decFactor": 1.9}, 
// { "img": "https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
//         "name": "Sofa",
//         "price": "259",
//         "decFactor":"0.4"
// },
//  {
//         "img":"https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg",
//         "name": "Wardrobe",
//         "price": "120",
//         "decFactor":"1.2"
//     }]