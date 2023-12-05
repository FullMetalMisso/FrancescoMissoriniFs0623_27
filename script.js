
    //programmare il recupero nome
    let savedName = localStorage.getItem('nomeScelto');// Recupera il nome precedentemente salvato da localStorage
    let vecchioNome = document.getElementById('vecchioNome');  // Mostra il nome precedentemente salvato sulla seconda lista "vecchioNome"
    if (savedName) {
        vecchioNome.innerHTML = savedName; //se é presente un nome lo mostra
    }
    
    //programmare tasto salva
    document.getElementById('saveBtn').addEventListener('click', function() { // Aggiungi un listener su "Salva"
        let nomeInserito = document.getElementById('nomeInserito'); // Ottieni il valore inserito nell'input "nomeInserito"
        let nuovoNome = nomeInserito.value; //assegna il valore del nome inserito a nuovoNome
        localStorage.setItem('nomeScelto', nuovoNome); // Salva il nuovo nome in localStorage
        vecchioNome.innerHTML =  nuovoNome; // Mostra il nuovo nome nell'elemento "vecchioNome"
    });


//programmare tasto cancella
    document.getElementById('deleteBtn').addEventListener('click', function() { // Aggiungi un listener su "Cancella"
        localStorage.removeItem('nomeScelto'); // Rimuovi il nome precedentemente salvato da localStorage
        vecchioNome.innerHTML = ''; // cancella il contenuto di "vecchioNome"
    });
