// language.js

// Definisci una variabile per la lingua corrente
let currentLanguage = 'italian';

// Funzione per caricare le stringhe di testo dalla lingua selezionata
function loadLanguageFile() {
    const languageFile = currentLanguage === 'italian' ? 'ita.txt' : 'en.txt';

    fetch(languageFile)
        .then(response => response.json())
        .then(data => {
            // Imposta il testo degli elementi HTML utilizzando i dati caricati
            document.getElementById('header-title').textContent = data.headerTitle;
            document.getElementById('header-subtitle').textContent = data.headerSubtitle;
            document.getElementById('search-input').placeholder = data.searchPlaceholder;
            document.getElementById('search-form').querySelector('button').textContent = data.searchButton;
            document.getElementById('footer-text').innerHTML = data.footerText;
        })
        .catch(error => {
            console.error('Errore nel caricamento del file di lingua:', error);
        });
}

// Chiamare questa funzione all'avvio per impostare la lingua iniziale
loadLanguageFile();