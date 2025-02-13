function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain');

    const leftPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 2 + 1; // Between 1s and 3s

    rainDrop.style.left = `${leftPosition}px`;
    rainDrop.style.animationDuration = `${animationDuration}s`;

    rainContainer.appendChild(rainDrop);

    setTimeout(() => {
        rainDrop.remove();
    }, animationDuration * 1000);
}

setInterval(createRain, 50);
