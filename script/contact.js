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

// Gestion du clic sur le bouton Email
const emailButton = document.getElementById("email-btn");
const emailPopup = document.getElementById("email-popup");

emailButton.addEventListener("click", () => {
    // Copier l'adresse email dans le presse-papier
    navigator.clipboard.writeText("ambroise.donnet.pro@outlook.fr").then(() => {
        // Afficher la popup
        emailPopup.style.display = "block";
        // Masquer la popup après 2 secondes
        setTimeout(() => {
            emailPopup.style.display = "none";
        }, 2000);
    });
});

// Activer les tooltips Bootstrap sur la page
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});