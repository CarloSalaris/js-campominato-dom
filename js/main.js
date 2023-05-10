/***************************
    CONSEGNA:

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. (NO RIPETIZIONI)

    Ciclo per creare array (lunghezza = 16) di numeri RANDOM compresi tra 1 e maxNum che non si ripetano

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. (punti ++)

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    SE clicca sulla bomba O raggiunge punteggio massimo (maxNum - 16) --> Fine del gioco

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

***************************/


// Dichiaro elemento GRIGLIA e elemento BUTTON
    const gridElement = document.getElementById("grid");
    const startButton = document.getElementById("startGame");

    // Assegno evento "click" al Button per fare apparire la griglia a seconda dei livelli di difficoltà.
    startButton.addEventListener("click", 
        
        function() {

            //Valore relativo al livello di difficoltà
            const diffLevel = document.getElementById("diffLevel").value;
            // console.log(diffLevel);
            
            // Stabilisco output a seconda del livello
            if (diffLevel == 2){
                startClickFunction(81, "calc(100% / 9)");
                console.log("Hai selezionato il livello medio");
                              
            }else if (diffLevel == 3) {
                startClickFunction(49, "calc(100% / 7)");
                console.log("Hai selezionato il livello difficile");

            }else {
                startClickFunction(100, "calc(100% / 10)");
                console.log("Hai selezionato il livello facile");
            }
        }
    );


/***************************
    FUNCTIONS
***************************/

// Funzione per far apparire un elemento non visibile
function showHiddenElement(elementName) {
    if (elementName.classList.contains("hide")) {
        elementName.classList.remove("hide");
        elementName.classList.add("show");
    }
};

// Funzione per creare un elemento (tipo, classe, larghezza)
function createGridSquare(tagType, classToAdd, elementWidth) {
    const newElement = document.createElement(tagType)
    newElement.classList.add(classToAdd);
    newElement.style.width = elementWidth;
    return newElement;
};

// Funzione PROCESSO PRINCIPALE di click
function startClickFunction(maxNum, elementWidth) {
    
    //Svuoto la griglia
    gridElement.innerHTML = "";
    //Mostra griglia nascosta
    showHiddenElement(gridElement);
    //Creo un loop che si ripeta tante volte quante il valore massimo prestabilito
    for (let i = 1; i <= maxNum; i++) {
        
        //Creo una funzione per riprodurre un quadrato (ogni volta)
        const newSquare = createGridSquare("div", "square", elementWidth);

        //"appendo" il quadrato
        gridElement.append(newSquare);
        
        //Creo lo span che andrà in ogni quadrato
        const newSpan = document.createElement("span");
        //Lo appendo con il valore "i" del for loop
        newSpan.innerHTML = i;
        newSquare.append(newSpan);

        //associo l'evento click a ogni nuovo quadrato creato
        newSquare.addEventListener("click",
            function() {
                // la cella cliccata si colora di azzurro
                this.classList.add("blue_bg");
                // emetto un messaggio in console con il numero della cella cliccata.
                console.log("the number you selected is: " + i)
            }
        );

    }           
};


/***************************
    REFACTORING NOTES
***************************/

// elementWidth = "calc(100% / Math.sqrt(maxNum))";
    //COME GENERALIZZARLO ALL'INTERNO DELLA FUNZIONE "startClickFunction" PER NON DOVER INSERIRLO OGNI VOLTA?
                