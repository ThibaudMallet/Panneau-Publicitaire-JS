// Objet représentant l'écran défilant Advertizr
const advertizer = {

    /**
     * Propriétés
     */

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,
    
    /**
     * Méthodes
     */
    handleClickOnLetter : function(event) {
        const letter = event.currentTarget;
        const content = letter.textContent;
        const screen = document.querySelector('.text');
        const currentText = screen.textContent;
        if (advertizer.isUpperCase === true) {
            screen.textContent = currentText + content.toUpperCase();
        } else {
            screen.textContent = currentText + content;
        }
    },

    handleClickOnMaj : function() {
        if (advertizer.isUpperCase === false) {
            advertizer.isUpperCase = true;
            const maj = document.querySelector('.maj');
            maj.classList.add('pressed');
            
        } else {
            advertizer.isUpperCase = false;
            const maj = document.querySelector('.maj');
            maj.classList.remove('pressed');
        }
    },

    handleClickOnReturn: function() {
        const screen = document.querySelector('.text');
        const currentText = screen.textContent;
        screen.textContent = currentText.slice(0, -1);
    },
    
    init: function() {
        const touch = document.querySelectorAll('.key');
        touch.forEach(element => element.addEventListener('click', advertizer.handleClickOnLetter));
        const maj = document.querySelector('.maj');
        maj.addEventListener('click', advertizer.handleClickOnMaj);
        const back = document.querySelector('.return');
        back.addEventListener('click', advertizer.handleClickOnReturn)
    }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', advertizer.init);