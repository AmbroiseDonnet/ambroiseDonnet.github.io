/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n        const messagesDiv = document.querySelector(\".messages\");\r\n        const inputField = document.getElementById(\"message-input\");\r\n        const sendButton = document.getElementById(\"send-button\");\r\n\r\n        const predefinedMessages = [\r\n            \"Qui suis-je ? 🤔\",\r\n            \"Je m'appelle Ambroise Donnet, étudiant en 2ᵉ année de BUT Informatique à l’Université de Lille, sur le campus \" +\r\n            \"de la Cité Scientifique à Villeneuve-d’Ascq. 🎓\",\r\n\r\n            \"Qu'est-ce qui me motive ? 🚀\",\r\n            \"Curieux et motivé, je suis à la recherche d’une alternance en tant que développeur informatique. J’aime explorer\" +\r\n            \" de nouvelles technologies et enrichir mes compétences, que ce soit dans le cadre de mes études ou de projets personnels. 💻\",\r\n\r\n            \"Quelle opportunité ai-je dans le cadre de ma formation ? ✈️\",\r\n            \"Dans le cadre de ma formation, j’ai l’opportunité de réaliser un stage à l’étranger, une expérience qui me \" +\r\n            \"permettra de développer mes capacités en anglais, bien que je sois au Québec, tout en découvrant d’autres \" +\r\n            \"approches professionnelles. 🌍\",\r\n\r\n            \"Quelles sont mes passions ? 🏊‍♂️🎮\",\r\n            \"En dehors de mes études, je suis passionné par la natation et les jeux vidéo, et je travaille comme animateur\" +\r\n            \" pendant les vacances. 🏖️\",\r\n\r\n            \"Qu'ai-je appris grâce à mes passions ? 🎨🧠\",\r\n            \"Ces activités m’ont appris à être à la fois créatif, organisé, et à bien m’entendre avec des publics variés. 🤝\"\r\n        ];\r\n\r\n        let messageIndex = 0;\r\n\r\n        // Désactiver l'interactivité de l'utilisateur\r\n        function disableUserInteraction() {\r\n            inputField.disabled = true;\r\n            sendButton.disabled = true;\r\n        }\r\n\r\n        // Réactiver l'interactivité de l'utilisateur\r\n        function enableUserInteraction() {\r\n            inputField.disabled = false;\r\n            sendButton.disabled = false;\r\n        }\r\n\r\n\r\n    }\r\n)\r\n\r\n\r\n/// Thèmes code:\r\n\r\n// Référence au sélecteur\r\nconst themeSelector = document.getElementById('themeSelector');\r\n\r\n// Fonction pour changer le thème\r\nfunction changeTheme(theme) {\r\n    // Supprime les classes de thème existantes\r\n    document.body.className = '';\r\n    // Ajoute la nouvelle classe de thème\r\n    document.body.classList.add(theme);\r\n    // Sauvegarde dans le localStorage\r\n    localStorage.setItem('selectedTheme', theme);\r\n}\r\n\r\n// Applique le thème sélectionné à partir du menu\r\nthemeSelector.addEventListener('change', (event) => {\r\n    changeTheme(event.target.value);\r\n});\r\n\r\n// Charger le thème précédemment sélectionné (si sauvegardé)\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const savedTheme = localStorage.getItem('selectedTheme') || 'clair';\r\n    themeSelector.value = savedTheme;\r\n    changeTheme(savedTheme);\r\n});\r\n\r\n\r\n// contact code\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const footer = document.querySelector('footer');\r\n    const lastSection = document.querySelector('#loisirs');\r\n\r\n    const observer = new IntersectionObserver((entries) => {\r\n        entries.forEach(entry => {\r\n            if (entry.isIntersecting) {\r\n                footer.classList.add('visible');\r\n            } else {\r\n                footer.classList.remove('visible');\r\n            }\r\n        });\r\n    }, {\r\n        threshold: 0.9\r\n    });\r\n\r\n    observer.observe(lastSection);\r\n});\r\n\r\n// Gestion du clic sur le bouton Email\r\nconst emailButton = document.getElementById(\"email-btn\");\r\nconst emailPopup = document.getElementById(\"email-popup\");\r\n\r\nemailButton.addEventListener(\"click\", () => {\r\n    // Copier l'adresse email dans le presse-papier\r\n    navigator.clipboard.writeText(\"ambroise.donnet.pro@outlook.fr\").then(() => {\r\n        // Afficher la popup\r\n        emailPopup.style.display = \"block\";\r\n        // Masquer la popup après 2 secondes\r\n        setTimeout(() => {\r\n            emailPopup.style.display = \"none\";\r\n        }, 2000);\r\n    });\r\n});\r\n\r\n// Activer les tooltips Bootstrap sur la page\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'));\r\n    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\r\n        return new bootstrap.Tooltip(tooltipTriggerEl);\r\n    });\r\n});\n\n//# sourceURL=webpack://ambroisedonnet.github.io/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;