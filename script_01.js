/* Die Satzbau-Maschine | Arrays */

/* Theorie: Array */

// let arr;

// arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,4,7,12];
// arr = [true,false];
// arr = ["Ich","bin","Max","Mütze"];

// ausgabe(arr);
// ausgabe(arr.length);
// ausgabe(arr[0]); // Index, begint IMMER mit 0
// ausgabe(arr[3]);
// ausgabe(arr[arr.length-1]);

/* Theorie: Schleifen (for-schleife) */

/* For -Schleife als Wiederholungs-Struktur */
// for (let i = 0; i < 10; i++) {
//     ausgabe(i);
// }

/* For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","der","coole","Max","Mütze"];
for (let i = 0; i < arr.length; i++) {
    // ausgabe(i);
    ausgabe(arr[i]);
}


/*** 02a. Funktionalität mit Array 1  */
// Kritik | Überlegung
// word1,word2, .... word100  :: Semantische Struktur
// arr[0],arr[1] ... arr[n] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation  semantisches Problem --> numerisches Problem
// ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"]));
function getSentenceArr(arr) {
    const gap = " ";
    const punct = "."
    const str = arr[0] + gap + 
                arr[1] + gap +
                arr[2] + gap +
                arr[3] +
                punct;
    return str; 
}

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// Modul: Satz-String zusammensetzen
ausgabe(getSentence("Ich","bin","Max","Mütze"));
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


