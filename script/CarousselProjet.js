document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const itemsContainer = carousel.querySelector('.carousel-items');
        const items = Array.from(itemsContainer.children);
        const totalItems = items.length;
        let currentIndex = 0;

        // Définir la largeur totale du conteneur
        itemsContainer.style.width = `${100 * totalItems}%`;

        // Chaque élément doit occuper 100% de la largeur du carrousel
        items.forEach(item => {
            item.style.flex = '100%';
        });

        const updateCarousel = () => {
            // Décale pour centrer l'élément actif
            const offset = -currentIndex * (100 / totalItems);
            itemsContainer.style.transform = `translateX(${offset}%)`;
        };

        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Boucle en arrière
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems; // Boucle en avant
            updateCarousel();
        });

        // Initialiser la position
        updateCarousel();
    });
});
