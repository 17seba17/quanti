// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const resultsSection = document.querySelector(".results-section");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Esegui una richiesta al server per ottenere i dati rari
        // e aggiungi i risultati a searchResults

        // Mostra la sezione dei risultati
        resultsSection.style.display = "block";
    });
});
