function focused() {
    const inputElements = document.querySelectorAll('input[type=text]'); //shte vzemem vsicki inputi na koito tipa mu e text

    Array.from(inputElements).forEach(inputElement => inputElement.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focused');
    }));

    Array.from(inputElements).forEach(inputElement => inputElement.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focused');
    }));
}
