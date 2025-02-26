document.addEventListener("DOMContentLoaded", () => {
        const messagesDiv = document.querySelector(".messages");
        const inputField = document.getElementById("message-input");
        const sendButton = document.getElementById("send-button");

        const predefinedMessages = [
            "Qui suis-je ? 🤔",
            "Je m'appelle Ambroise Donnet, étudiant en 2ᵉ année de BUT Informatique à l’Université de Lille, sur le campus " +
            "de la Cité Scientifique à Villeneuve-d’Ascq. 🎓",

            "Qu'est-ce qui me motive ? 🚀",
            "Curieux et motivé, je suis à la recherche d’une alternance en tant que développeur informatique. J’aime explorer" +
            " de nouvelles technologies et enrichir mes compétences, que ce soit dans le cadre de mes études ou de projets personnels. 💻",

            "Quelle opportunité ai-je dans le cadre de ma formation ? ✈️",
            "Dans le cadre de ma formation, j’ai l’opportunité de réaliser un stage à l’étranger, une expérience qui me " +
            "permettra de développer mes capacités en anglais, bien que je sois au Québec, tout en découvrant d’autres " +
            "approches professionnelles. 🌍",

            "Quelles sont mes passions ? 🏊‍♂️🎮",
            "En dehors de mes études, je suis passionné par la natation et les jeux vidéo, et je travaille comme animateur" +
            " pendant les vacances. 🏖️",

            "Qu'ai-je appris grâce à mes passions ? 🎨🧠",
            "Ces activités m’ont appris à être à la fois créatif, organisé, et à bien m’entendre avec des publics variés. 🤝"
        ];

        let messageIndex = 0;

        // Désactiver l'interactivité de l'utilisateur
        function disableUserInteraction() {
            inputField.disabled = true;
            sendButton.disabled = true;
        }

        // Réactiver l'interactivité de l'utilisateur
        function enableUserInteraction() {
            inputField.disabled = false;
            sendButton.disabled = false;
        }


    }
)


/// Thèmes code:

// Référence au sélecteur
const themeSelector = document.getElementById('themeSelector');

// Fonction pour changer le thème
function changeTheme(theme) {
    // Supprime les classes de thème existantes
    document.body.className = '';
    // Ajoute la nouvelle classe de thème
    document.body.classList.add(theme);
    // Sauvegarde dans le localStorage
    localStorage.setItem('selectedTheme', theme);
}

// Applique le thème sélectionné à partir du menu
themeSelector.addEventListener('change', (event) => {
    changeTheme(event.target.value);
});

// Charger le thème précédemment sélectionné (si sauvegardé)
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'clair';
    themeSelector.value = savedTheme;
    changeTheme(savedTheme);
});


// contact code

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