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
    fetch('../file.json') // Sostituisci 'file.json' con il percorso del tuo nuovo file JSON
        .then(response => response.json())
        .then(data => {
            // Imposta il testo degli elementi HTML utilizzando i dati caricati
            document.getElementById('header-title').textContent = data.headerTitle[currentLanguage];
            document.getElementById('header-subtitle').textContent = data.headerSubtitle[currentLanguage];
            document.getElementById('search-input').placeholder = data.searchPlaceholder[currentLanguage];
            document.getElementById('search-form').querySelector('button').textContent = data.searchButton[currentLanguage];
            document.getElementById('footer-text').innerHTML = data.footerText[currentLanguage];
        })
        .catch(error => {
            console.error('Errore nel caricamento del file di lingua:', error);
        });
}

// Chiamare questa funzione all'avvio per impostare la lingua iniziale
loadLanguageFile();
