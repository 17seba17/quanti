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
        const repositoryName = "17seba17/quanti"; // Sostituisci con il tuo nome utente GitHub e il nome della repository
        fetch(`https://api.github.com/repos/${repositoryName}/contents`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    searchResults.innerHTML += "Nessun file trovato nella repository.";
                } else {
                    searchResults.innerHTML += "Elenco dei file nella repository:<br>";
                    const ul = document.createElement("ul");
                    ul.classList.add("my-ul-class"); // Aggiungi una classe CSS all'elemento ul
                    data.forEach(item => {
                        if (item.type === "file") {
                            const li = document.createElement("li");
                            li.classList.add("my-li-class"); // Aggiungi una classe CSS all'elemento li
                            const link = document.createElement("a");
                            link.href = item.html_url;
                            link.textContent = item.name;
                            li.appendChild(link);
                            ul.appendChild(li);
                        }
                    });
                    searchResults.appendChild(ul);
                }
            })
            .catch(error => {
                console.error("Errore nell'ottenere l'elenco dei file:", error);
                searchResults.innerHTML += "Errore nell'ottenere l'elenco dei file.";
            });
    });
});
