document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedisci il comportamento predefinito del modulo di invio

        // Ottieni la data e l'ora correnti
        const today = new Date();
        const formattedDate = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

        // Mostra la stringa dei risultati iniziale
        searchResults.innerHTML = `Gli articoli del giorno sono: ${formattedDate}<br><br>`;

        // Ottieni l'elenco dei file nella repository utilizzando la GitHub API
       
        
     



// Funzione per ottenere l'elenco di directory e file all'interno di una directory specifica
function getContentsInDirectory(directoryUrl) {
    return fetch(directoryUrl)
        .then(response => response.json())
        .then(data => {
            const directories = [];
            const files = [];

            data.forEach(item => {
                if (item.type === "dir") {
                    // Se è una directory, aggiungila all'array delle directory
                    directories.push(item);
                } else if (item.type === "file") {
                    // Se è un file, aggiungilo all'array dei file
                    files.push(item);
                }
            });

            // Esegui la ricerca all'interno dei file della directory corrente (se necessario)

            // Richiama la funzione ricorsivamente per le sottodirectory
            const subDirectoryPromises = directories.map(dir => getContentsInDirectory(dir.url));

            return Promise.all(subDirectoryPromises)
                .then(subDirectoryContents => {
                    // Combina i contenuti delle sottodirectory con quelli della directory corrente
                    const allContents = [].concat(...subDirectoryContents, files);
                    return allContents;
                });
        });
}

const repositoryName = "17seba17/quanti"; // Sostituisci con il tuo nome utente GitHub e il nome della repository
const repositoryUrl = `https://api.github.com/repos/${repositoryName}/contents`;

getContentsInDirectory(repositoryUrl)
    .then(contents => {
        if (contents.length === 0) {
            searchResults.innerHTML += "Nessuna directory o file trovato nella repository.";
        } else {
            searchResults.innerHTML += "Elenco di directory e file nella repository:<br>";
            const ul = document.createElement("ul");
            contents.forEach(item => {
                const li = document.createElement("li");
                const link = document.createElement("a");
                link.href = item.html_url;
                link.textContent = item.name;
                li.appendChild(link);
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        }
    })
    .catch(error => {
        console.error("Errore nell'ottenere l'elenco delle directory e dei file:", error);
        searchResults.innerHTML += "Errore nell'ottenere l'elenco delle directory e dei file.";
    });









    });
});
