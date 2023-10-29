document.addEventListener("DOMContentLoaded", function() {
    // Imposta il numero di barili iniziale
    let numeroBarili = 20000;
    document.getElementById("numerodibarili").textContent = numeroBarili;

    // Gestione del pulsante "Modifica Numero"
    document.getElementById("modificaNumero").addEventListener("click", function() {
        const inputNumeroBarili = document.getElementById("inputNumeroBarili");
        const nuovoNumero = parseInt(inputNumeroBarili.value);
        if (!isNaN(nuovoNumero)) {
            numeroBarili = nuovoNumero;
            document.getElementById("numerodibarili").textContent = numeroBarili;
            inputNumeroBarili.value = "";
        }
    });

    // Gestione del pulsante "Ripristina Numero"
    document.getElementById("ripristinaNumero").addEventListener("click", function() {
        numeroBarili = 20000;
        document.getElementById("numerodibarili").textContent = numeroBarili;
    });
});
