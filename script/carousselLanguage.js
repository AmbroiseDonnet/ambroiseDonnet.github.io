document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#hard-skill ul");
    const items = Array.from(ul.children);
    const ulWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);

    // Ajouter la classe pour démarrer l'animation
    ul.classList.add("scrolling");

    // Ajuster la durée de l'animation pour éviter les espaces
    ul.style.animationDuration = `${ulWidth / 10}s`; // Ajuste la vitesse avec le diviseur
});
