function create(words) {
    const contentElement = document.getElementById('content');
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
      }); 
      
    //drugoto e za vseki paragraph da zakacim klik
    divElements
        .forEach(divElement => {
            divElement.addEventListener('click', (event) => {
                const pElement = divElement.querySelector('p'); //prez vseki div shte vzema tehniq paragraf
                pElement.style.display = 'block';
            });
        }); 
        
    // Append all to DOM
    // contentElement.append(...divElements); // Doesn't work in judge po-byrzo
   divElements.forEach(divElement => contentElement.appendChild(divElement)); // Not efficient mnogu po-bavno 
}