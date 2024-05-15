function validate() {
    const emailInputElement = document.getElementById('email'); //trqbva da si go vzemem naseto polence za email
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/
    emailInputElement.addEventListener('change', (event) => {
        if (!pattern.test(event.target.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
}
