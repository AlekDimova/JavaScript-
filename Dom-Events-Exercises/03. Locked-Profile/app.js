function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');
        
        showButtonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return;
            };

            const additionInformationElement = showButtonElement.previousElementSibling;

            // if(showButtonElement.textContent === 'Show more') {
            //     additionInformationElement.style.display = 'block'; //za da pokaze povece
            //     showButtonElement.textContent = 'Hide it';
            // } else {
            //     additionInformationElement.style.display = 'none';
            //     showButtonElement.textContent = 'Show more';
            // }

            additionInformationElement.style.display = additionInfoElement.style.display === 'block' 
            ? 'none' 
            : 'block';
            showButtonElement.textContent = showButtonElement.textContent  === 'Show more' 
            ? 'Hide it' 
            : 'Show more';
        });
    }
}