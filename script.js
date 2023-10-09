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
        const repositoryName = "17seba17/quanti"; 
        function find(path){
            fetch(`https://api.github.com/repos/${repositoryName}/contents${path}`)
            .then(response => response.json())
            .then(data => {


                let count = 0;
    data.forEach(item => {
        if (item.type === "dir") {
            count++;
        }
    });
    return count;


                if (count === 0) {
                    searchResults.innerHTML += ("Nessuna directory in "+path);
                }

                else {
                    searchResults.innerHTML += "Elenco delle directory nella repository:<br>";
                    const ul = document.createElement("ul");
                    data.forEach(item => {
                        if (item.type === "dir") { // Verifica se l'elemento è una directory
                            const li = document.createElement("li");
                            const link = document.createElement("a");
                            link.href = item.html_url;
                            link.textContent = item.name;
                            li.appendChild(link);
                            ul.appendChild(li);

                            find(path+"/"+item.name);
                        }
                    });
                    searchResults.appendChild(ul);
                }





            })
            .catch(error => {
                console.error("Errore nell'ottenere l'elenco delle directory:", error);
                searchResults.innerHTML += "Errore nell'ottenere l'elenco delle directory.";
            });

        }///fine function
        
        subdirectory="";
        find(subdirectory);






    });
});
