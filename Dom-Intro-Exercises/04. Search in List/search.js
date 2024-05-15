function search() {
   const townListElement = document.getElementById('towns'); //vzimame gradovete
   const resultElement = document.getElementById('result');
   const searchText = document.getElementById('searchText').value; //vzimame value na trysackata

   let matchCount = 0;
   const townElements = Array.from(townListElement.children);
   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         matchCount++;
      } //ako slozim i else da zacistva vsicki ostanali
   }

   resultElement.textContent = `${matchCount} matches found`;
}
