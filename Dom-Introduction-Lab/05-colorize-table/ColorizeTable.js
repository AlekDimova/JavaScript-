function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');

    // evenRowElements.forEach(element => element.style.backgroundColor = 'teal'); oti vo judge ne raboti
    for (const element of evenRowElements) {
        element.style.backgroundColor = 'teal';
    }

}