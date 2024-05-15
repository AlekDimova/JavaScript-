function solve() {
   const addProductButtonElements = document.querySelectorAll('button.add-product'); //vzimame vsicki add butoni s button class
   const textareaElement = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('button.checkout');
   let totalPrice = 0;
   let uniqueProducts = {};

   for (const buttonElement of addProductButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;
      // const productElement = buttonElement.closest('.product'); tova e po-hubaqviq variant no judge ne go podrza

      buttonElement.addEventListener('click', () => {
         const title = productElement.querySelector('.product-title').textContent; //vzimame title-a
         const price = Number(productElement.querySelector('.product-line-price').textContent); //vzimame cenata
         
         totalPrice += price;
         uniqueProducts[title] = true;

         //kum syshtestvuvashtiq textContent da dobavim novo sydrzanie
         textareaElement.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButtonElement.addEventListener('click', (event) => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
      event.target.setAttribute('disabled', 'disabled');
      const list = Object.keys(uniqueProducts).join(', ');

      textareaElement.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.\n`;
   });
}
