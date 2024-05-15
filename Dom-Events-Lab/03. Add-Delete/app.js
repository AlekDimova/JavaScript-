function addItem() {
    const inputItemElement = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');

    //sled kato se natise Add Item iskame da vzemem ot input elementa- itema i da go dobavim
    // Create new item element
    const newInputItemElement = document.createElement('li'); //syzdavame nov element
    newInputItemElement.textContent = inputItemElement.value; //i na tozi nov element iskame da mu slozim valueto ot inputa

    // !! create link element -DELETE se kazva
    const deleteLinkElement = document.createElement('a'); 
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    // !! Add event to link element (tuk pravim delete da e aktiven i da go istrie celiot sozdaden input)
    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });

    // !! Append link element to newItemElement
    newInputItemElement.appendChild(deleteLinkElement); //!!! na syzdadeniq item koito e dobaven iskame dopolnitelno da mu dobavim DELETE link

    // Append new item element to list
    itemsListElement.appendChild(newInputItemElement); //tuk trqbva da go attachnem elementa koito sme syzdali

    // clear input
    inputItemElement.value = '';
}
