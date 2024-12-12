document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const lastSection = document.querySelector('#loisirs');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
            } else {
                footer.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.9
    });

    observer.observe(lastSection);
});
