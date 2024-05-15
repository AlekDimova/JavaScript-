function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', function(event) {
        const currentWidth = event.offsetX; //tekushtata pozicija
        const elementWidth = event.target.clientWidth; //do kadeto natisem
        const progress = Math.floor((currentWidth / elementWidth) * 100) 

        resultElement.textContent = `${progress}%`;
    });
}
