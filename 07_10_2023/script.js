// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const resultsSection = document.querySelector(".results-section");

    searchForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        // Ottieni la query di ricerca dall'input
        const query = searchInput.value;

        // Effettua una ricerca di file 'index.html' nel repository GitHub
        const githubToken = 'YOUR_GITHUB_TOKEN';
        const repositoryOwner = 'YOUR_REPO_OWNER';
        const repositoryName = 'YOUR_REPO_NAME';

        const apiUrl = `https://api.github.com/search/code?q=${query}+in:file+filename:index.html+repo:${repositoryOwner}/${repositoryName}`;
        
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${githubToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta API GitHub');
            }

            const data = await response.json();

            // Estrai i risultati della ricerca
            const searchResultsHtml = data.items.map((item) => {
                const htmlUrl = item.html_url;
                return `<li><a href="${htmlUrl}" target="_blank">${htmlUrl}</a></li>`;
            });

            // Mostra i risultati nella pagina
            searchResults.innerHTML = searchResultsHtml.join("");
            resultsSection.style.display = "block";
        } catch (error) {
            console.error('Errore nella ricerca:', error);
        }
    });
});
