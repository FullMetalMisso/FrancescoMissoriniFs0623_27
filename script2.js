
    let counterValue = sessionStorage.getItem('tempoTrascorso') || 0; // Recupera il valore precedentemente salvato su sessionStorage
    updatetimerCounter(counterValue); // Mostra il valore corrente nel documento

   
    setInterval(function() {  // Aggiorna il contatore ogni secondo
        counterValue++; //aggiungi un secondo
        updatetimerCounter(counterValue);
        sessionStorage.setItem("tempoTrascorso", counterValue); // Salva il valore in sessionStorage
    }, 1000);

    function updatetimerCounter(value) {
        document.getElementById("timerCounter").textContent = value   // Aggiorna il testo nell'elemento con ID "counterDisplay"
    }