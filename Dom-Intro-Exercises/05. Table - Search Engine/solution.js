function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchText = searchFieldElement.value; //poneze e input s value vzimame stoinosta
      
      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');
         
         for (const tdElement of tdElements) {
            // TODO: Check case sensitivity
            //ako go namerim da includva nqkoi ot elementite
            if (tdElement.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.className = 'select';
            // trElement.classList.add('select'); tova e malko po-hubaviq variant
         }
      }
      
      // Clear old data
      searchFieldElement.value = '';
   }
}
