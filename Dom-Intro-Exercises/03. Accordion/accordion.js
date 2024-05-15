function toggle() {
    const extraInformationElement = document.getElementById('extra');
    const toggleButtonElement = document.querySelector('.head span.button'); //vzimame button

    //imame 2 scenariq kogato iskame da pokazem poveke i koga po-malko
    const currentButtonText = toggleButtonElement.textContent;
    if (currentButtonText === 'More') {
        extraInformationElement.style.display = 'block'; //iskam da pokazes blocka
        toggleButtonElement.textContent = 'Less'; //i na butona textcontent da e LESS
    } else {
        extraInformationElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }
}
