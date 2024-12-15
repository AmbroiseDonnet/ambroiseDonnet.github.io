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
    let typingInProgress = false;
    let question = true;

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

    // Écrire un message lettre par lettre
    function typeMessage(message, callback) {
        disableUserInteraction(); // Désactiver l'utilisateur pendant la saisie
        inputField.value = ""; // Réinitialiser la zone de texte
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < message.length) {
                inputField.value += message[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval); // Arrêter le "typing"
                setTimeout(() => {
                    if(question) {
                        addMessage(inputField.value, question);// Ajouter le message dans la conversation
                        question = false;
                    }else {
                        addMessage(inputField.value, question);// Ajouter le message dans la conversation
                        question = true;
                    }
                    inputField.value = ""; // Réinitialiser la zone de texte
                    enableUserInteraction(); // Réactiver l'interactivité
                    if (callback) callback(); // Passer au message suivant
                }, 500); // Attendre un peu avant d'ajouter le message
            }
        }, 20); // Délai entre chaque lettre
    }

    // Ajouter un message à l'interface
    function addMessage(content, isSelf = false) {
        const message = document.createElement("div");
        message.classList.add("message");
        if (isSelf) message.classList.add("self");
        message.textContent = content;
        messagesDiv.appendChild(message);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll vers le bas
    }

    // Lancer une conversation automatique
    function startAutoConversation() {
        if (messageIndex < predefinedMessages.length) {
            typingInProgress = true; // Bloquer l'interaction utilisateur
            typeMessage(predefinedMessages[messageIndex], () => {
                messageIndex++;
                typingInProgress = false; // Débloquer après le message
                startAutoConversation(); // Passer au message suivant
            });
        }
    }

    // Gestion de la saisie utilisateur
    sendButton.addEventListener("click", () => {
        if (!typingInProgress) { // Permettre l'envoi uniquement si rien n'est en cours
            const userInput = inputField.value.trim();
            if (userInput) {
                addMessage(userInput, true);
                inputField.value = "";
            }
        }
    });

    inputField.addEventListener("keydown", (event) => {
        if (!typingInProgress && event.key === "Enter") {
            sendButton.click();
        }
    });

    // Lancer la conversation automatique dès le chargement
    startAutoConversation();
});

const textarea = document.getElementById('message-input');

textarea.addEventListener('input', () => {
    // Réinitialise la hauteur pour recalculer
    textarea.style.height = 'auto';
    // Ajuste la hauteur en fonction du contenu
    textarea.style.height = textarea.scrollHeight + 'px';
});