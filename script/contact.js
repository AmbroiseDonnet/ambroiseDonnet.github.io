document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const lastSection = document.querySelector('#loisirs'); // Change selon ton ID de dernière section

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
            } else {
                footer.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Définit combien de la section doit être visible (50% ici)
    });

    observer.observe(lastSection);
});
