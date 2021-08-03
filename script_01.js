/* Die Satzbau-Maschine | Arrays */

/* Theorie: Array */

let arr;

arr = new Array(); // Konstruktor
arr = []; // Literal
arr = [2,4,7,12];
arr = [true,false];
arr = ["Ich","bin","Max","Mütze"];

ausgabe(arr);
ausgabe(arr.length);
ausgabe(arr[0]); // Index, begint IMMER mit 0
ausgabe(arr[3]);
ausgabe(arr[arr.length-1]);


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// Modul: Satz-String zusammensetzen
// ausgabe(getSentence("Ich","bin","Max","Mütze"));
function getSentence(word1,word2,word3,word4) {
    const gap = " ";
    const punct = "."
    const str = word1 + gap + 
                word2 + gap +
                word3 + gap +
                word4 +
                punct;
    return str; 
}


// Modul: Ausgabe in Konsole : Test
// ausgabe("hi"); 
function ausgabe(outputStr) {
    console.log(outputStr);
}


