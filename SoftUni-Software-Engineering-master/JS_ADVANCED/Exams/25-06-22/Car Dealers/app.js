window.addEventListener("load", solve);

// <html>
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Online Car Magazine</title>
//     <link rel="stylesheet" href="styles.css" />
//   </head>
//   <body>
//     <div class="container">
//       <div class="form-wrapper">
//         <form>
//           <h1>Create offer</h1>

//           <fieldset>
//             <legend><span class="number">1</span> Car Details</legend>

//             <label for="make">Make:</label>
//             <input type="text" id="make" name="make" />

//             <label for="model">Model:</label>
//             <input type="text" id="model" name="model" />

//             <label for="year">Production year:</label>
//             <input type="number" id="year" min="1990" max="2022" step="1" value="2017" />
            
//             <label for="fuel">Fuel type:</label>
//             <select id="fuel" name="fuel" >
//               <option value="petrol">Petrol</option>
//               <option value="diesel">Diesel</option>
//               <option value="hybrid">Hybrid</option>
//               <option value="electric">Electric</option>
//             </select>
          
//             <legend><span class="number">2</span> Price</legend>

//             <label for="original-cost">Original cost:</label>
//             <input type="number" id="original-cost" step="10" />

//             <label for="selling-price">Selling price:</label>
//             <input type="number" id="selling-price" step="10" />

//           <button id="publish" type="submit">Publish</button>
//         </form>
//       </div>

//       <div class="table-wrapper">
//         <section>
//             <div class="tbl-header">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Make</th>
//                     <th>Model</th>
//                     <th>Year</th>
//                     <th>Fuel</th>
//                     <th>Price</th>
//                     <th>New Price</th>
//                     <th>-</th>
//                   </tr>
//                 </thead>
//               </table>
//             </div>
//             <div class="tbl-content">
//               <table>
//                 <tbody id="table-body">
                    
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           <section id="sold-wrapper">
            
//               <div id="title-bar">
//                 Sold cars:
//               </div>
//               <div id="nav">
//                 <span>Make and model</span>
//                     <span>Production year</span>
//                     <span>Profit made</span>
//               </div>
//             <ul id="cars-list">
              
//             </ul>
//           </section>
//           <p>Profit made: <strong id="profit">0.00</strong>$</p>
// </div>
//     </div>
//     <script src="./app.js"></script>
//   </body>
// </html>




// Write the missing JavaScript code to make the Car Dealer work as expected:
// All fields (make, model, year, fuel, original-cost and selling-price) are filled with the correct input
// and selling price should have bigger value than original price
// o	Make, model, year, fuel, original-cost and selling price are non-empty strings. If any of them are empty, or original price is bigger than selling price the program should not do anything.

// 1.	Getting the information from the form

// When you click the [“Publish”] button, the information from the input fields must be added to the tbody with the id “table-body”. Then, clear all input fields.
// The HTML structure looks like this:

// <tbody id="table-body">
// <tr class="row”>
// <td>Audi</td>
// <td>A4</td>
// <td>2012</td>
// <td>petrol</td>
// <td>10000</td>
// <td>11900</td>
// <td>
// <button class="action-btn edit">Edit</button>
// <button class="action-btn sell">Sell</button> </td>
// </tr>
// </tbody>




// 2.	Edit information for posts
// When the ["Edit"] button is clicked, the information from the post must be sent to the input fields and the record should be deleted from the tbody with the id "table-body".
  
// After editing the information make a new record to the tbody with updated information.
  

// 3.	Sell car
// When you click the ["Sell"] button, the record must be deleted from the tbody with id "table-body" and a new record must be appended to the ul with the id "cars-list"
// 	The new record should be as the following:
// •	First span should include both car Make and Model as whole string and separated by a single space
// •	Second span should include the Production year
// •	Third span should include the difference between the Selling price and Original price

// <ul id="cars-list">
// <li class="each-list"> <span>Audi A4</span> <span>2012</span>
// <span>2500</span> </li>
// </ul>

// Total profit made will be the sum from all sold cars profits which should be rounded to the second digit after the decimal point and should be displayed in strong with id "profit"





function solve() {
  let make = document.querySelector('#make');
  let model = document.querySelector('#model');
  let year = document.querySelector('#year');
  let fuel = document.querySelector('#fuel');
  let originalCost = document.querySelector('#original-cost');
  let sellingPrice = document.querySelector('#selling-price');

  let tableBody = document.querySelector('tbody');
  let publishBtn = document.querySelector('#publish');
  let profit = document.querySelector('#profit');
  let totalProfit = 0;

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (make.value && model.value && year.value && fuel.value && originalCost.value && sellingPrice.value) {
      if (Number(originalCost.value) < Number(sellingPrice.value)) {
        let tr = document.createElement('tr');
        tr.classList.add('row');

        let tdMake = document.createElement('td');
        tdMake.textContent = make.value;
        let tdModel = document.createElement('td');
        tdModel.textContent = model.value;
        let tdYear = document.createElement('td');
        tdYear.textContent = year.value;
        let tdFuel = document.createElement('td');
        tdFuel.textContent = fuel.value;
        let tdOriginalCost = document.createElement('td');
        tdOriginalCost.textContent = originalCost.value;
        let tdSellingPrice = document.createElement('td');
        tdSellingPrice.textContent = sellingPrice.value;

        let tdActions = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        let sellBtn = document.createElement('button');
        sellBtn.classList.add('action-btn', 'sell');
        sellBtn.textContent = 'Sell';

        tdActions.appendChild(editBtn);
        tdActions.appendChild(sellBtn);

        tr.appendChild(tdMake);
        tr.appendChild(tdModel);
        tr.appendChild(tdYear);
        tr.appendChild(tdFuel);
        tr.appendChild(tdOriginalCost);
        tr.appendChild(tdSellingPrice);
        tr.appendChild(tdActions);

        tableBody.appendChild(tr);

        make.value = '';
        model.value = '';
        year.value = '';
        fuel.value = '';
        originalCost.value = '';
        sellingPrice.value = '';

        editBtn.addEventListener('click', (e) => {
          let currentRow = e.target.parentNode.parentNode;
          let [make, model, year, fuel, originalCost, sellingPrice] = currentRow.querySelectorAll('td');

          document.querySelector('#make').value = make.textContent;
          document.querySelector('#model').value = model.textContent;
          document.querySelector('#year').value = year.textContent;
          document.querySelector('#fuel-type').value = fuel.textContent;
          document.querySelector('#price').value = originalCost.textContent;
          document.querySelector('#new-price').value = sellingPrice.textContent;

          currentRow.remove();
        });

        sellBtn.addEventListener('click', (e) => {
          let currentRow = e.target.parentNode.parentNode;
          let [make, model, year, fuel, originalCost, sellingPrice] = currentRow.querySelectorAll('td');

          let carList = document.querySelector('#cars-list');
          let li = document.createElement('li');
          li.classList.add('each-list');

          let spanMakeModel = document.createElement('span');
          spanMakeModel.textContent = `${make.textContent} ${model.textContent}`;
          let spanYear = document.createElement('span');
          spanYear.textContent = year.textContent;
          let spanProfit = document.createElement('span');
          spanProfit.textContent = Number(sellingPrice.textContent) - Number(originalCost.textContent);

          li.appendChild(spanMakeModel);
          li.appendChild(spanYear);
          li.appendChild(spanProfit);

          carList.appendChild(li);

          totalProfit += Number(spanProfit.textContent);
          profit.textContent = totalProfit.toFixed(2);

          currentRow.remove();
        });
      }
    }
  });
}