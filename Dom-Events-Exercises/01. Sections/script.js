function create(words, event) {
   const contentElement = document.getElementById('content');
   console.log(event);
   const divElements = words
      .map(word => {
         //syzdavame ot dolu nagore
         const pElement = document.createElement('p'); //create paragraph
         pElement.textContent = word; //add text content
         pElement.style.display = 'none'; //hide paragraph

         const divElement = document.createElement('div'); //create div koito e parent na paragrafa
         divElement.appendChild(pElement); //append paagraph to div t.e da zakacim p kum diva

         // divElement.addEventListener('click', () => {
         //    pElement.style.display = 'block';
         // })

         return divElement; //shte ni vyrne masiv ot div elementi
      }); //drugoto e za vseki paragraph da zakacim klik

   // Attach multiple event listeners without event delegation
   // divElements
   //    .forEach(divElement => {
   //       divElement.addEventListener('click', (event) => {
   //          const pElement = divElement.querySelector('p');
   //          pElement.style.display = 'block';
   //       });
   //    });   

   // Append all to DOM
   // contentElement.append(...divElements); // Doesn't work in judge
   // divElements.forEach(divElement => contentElement.appendChild(divElement)); // Not efficient 
   
   // Using document fragment
   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement)); // Not efficient 
   contentElement.appendChild(divElementsFragment);

   // Attach "multiple" events using event delegation
   contentElement.addEventListener('click', (e) => {
      if (e.target.tagName === 'DIV') {
         const pElement = e.target.querySelector('p');
         pElement.style.display = 'block';
      }
   });
}

function originalCreate(words) {
   const contentElement = document.getElementById('content');

   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         divElement.addEventListener('click', () => {
            pElement.style.display = 'block';
         });

         return divElement;
      });

   // Append all to DOM
   // contentElement.append(...divElements);
   divElements.forEach(divElement => contentElement.appendChild(divElement));
}