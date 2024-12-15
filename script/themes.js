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
