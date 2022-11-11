// function solve() {
//   let productElement = Array.from(document.querySelectorAll(".product"));
//   let totalSum = 0;
//   let totalProducts = new Set();

//   for (const product of productElement) {
//     let addButton = product.querySelector(".add-product");
//     addButton.addEventListener("click", addProduct);
//   }

//   let buttonCheckOut = document.querySelector(".checkout");
//   buttonCheckOut.addEventListener("click", checkOut);

//   function checkOut() {
//     for (const product of productElement) {
//       let addButton = product.querySelector(".add-product");
//       addButton.removeEventListener("click", addProduct);
//     }
//     let output = [...totalProducts];
//      let textArea = document.querySelector("textarea");
//      let textArr = output.join("\n");
//      textArr += "\n" + `You bought ${[...list].join(", ")} for ${totalSum.toFixed(2)}.`;
//      textArea.value = textArr;
     
//   }
//   let list = new Set();

//   function addProduct({ target }) {
//     let parentOfTarget = target.parentNode;
//     let parentOfParent = parentOfTarget.parentNode;
//     let productName =
//       parentOfParent.querySelector(".product-title").textContent;
//     let productPrice = parentOfParent.querySelector(
//       ".product-line-price"
//     ).textContent;
//     let inputElementText = `Added ${productName} for ${productPrice} to the cart.\n`;
//     totalProducts.add(inputElementText);
//      totalSum += Number(productPrice);
//      list.add(productName);
//   }
// }

function solve() {
   const shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   shoppingCart.addEventListener('click', onClick);
   const checkoutButton = document.getElementsByClassName('checkout')[0];
   checkoutButton.addEventListener('click', checkout);

   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   function checkout() {
      const products = new Set();
      cart.forEach(p => products.add(p.name));

      const total = cart.reduce((t, c) => t + c.price, 0);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`;

      shoppingCart.removeEventListener('click', onClick);
      checkoutButton.removeEventListener('click', checkout);
   }
}