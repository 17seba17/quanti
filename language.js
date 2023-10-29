// language.js

// Definisci una variabile per la lingua corrente
let currentLanguage = 'italian';

// Funzione per cambiare la lingua
function changeLanguage() {
    // Cambia la lingua corrente
    currentLanguage = currentLanguage === 'italian' ? 'english' : 'italian';

    // Carica le stringhe di testo nella nuova lingua
    loadLanguageFile();
}

function loadLanguageFile() {
    fetch('file.json')
        .then(response => response.json())
        .then(data => {
            const elementsToTranslate = document.querySelectorAll('[data-translate]');

            elementsToTranslate.forEach(element => {
                const translationKey = element.getAttribute('data-translate');
                if (data[translationKey] && data[translationKey][currentLanguage]) {
                    element.textContent = data[translationKey][currentLanguage];
                }
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento del file di lingua:', error);
        });
}


// Chiamare questa funzione all'avvio per impostare la lingua iniziale
loadLanguageFile();
