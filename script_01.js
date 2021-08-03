/* Die Satzbau-Maschine | Arrays */

/* THEORIE */

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
// let arr = ["Ich","bin","der","coole","Max","Mütze"];
// for (let i = 0; i < arr.length; i++) {
//     // ausgabe(i);
//     ausgabe(arr[i]);
// }

 /*********   Überlegungen - Transponierung **********/

/* 
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 3 + 1
// ausgabe("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
// let a = 0; // Anfangswert
// for (let i = 0; i < 5; i++) {
//     ausgabe("ausgabe aus der loop: " + a);
//     a += 1; // a = a +1
// }

// ausgabe("ausgabe nach der loop: " + a);

/* 
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = "";  // Anfangswert
// const gap = " ";
// const addStr = "Test";
// for (let i = 0; i < 5; i++) {
//     str += addStr + gap;
// }

// ausgabe(str);


/* PRAXIS */


/*** 02b. Funktionalität mit Array 2 */
ausgabe(getSentenceArr2(["Ich","bin"]));
ausgabe(getSentenceArr2(["Ich","bin","Max","Mütze"]));
ausgabe(getSentenceArr2(["Ich","bin","der","coole","Max","Mütze"]));
function getSentenceArr2(arr) {
    const gap = " ";
    const punct = "."
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + gap;
    }

    return str + punct; 
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


