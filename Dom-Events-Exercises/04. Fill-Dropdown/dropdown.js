function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.value = inputValueElement.value;
    optionElement.textContent = inputTextElement.value;

    selectElement.appendChild(optionElement); //butona menu si gi dobavq opciite

    inputTextElement.value = ''; //cistim inputa
    inputValueElement.value = ''; //cistim i drugija input

}