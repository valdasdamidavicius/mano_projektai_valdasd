console.log('Sveiki sveiki');

// 1. Sukurkite funkciją kuri priimtų du kintamuosius, juos sudaugintų ir atspausdintų sandaugą į konsolę.

function multiply(a, b) {
    console.log(a * b);
}
multiply(2, 3);

// 2. Sukurkite funkciją kuri priimtų vieną kintamąjį, vardą. Ir konsolėje išspausdintų “labas “
// ir tą paduotą vardą.

function greet(name) {
    console.log('Labas, ' + name);
}
greet('Valdai');

// 3. Sukurkite funkciją  kuri priimtų vieną kintamąjį, tekstą. Ir konsolėje išspausdintų kiek simbolių yra tame tekste.

function countCharacters(text) {
    console.log('Simbolių skaičius: ' + text.length);
}
countCharacters('Paskutinis dvyliktokų skambutis');

// 4. Sukurkite funkciją kuri priimtų 2 kintamuosius tekstus, vardą, pavardę ir atspausdintų inicialus.
// T.y vardo ir pavardės pirmąsias raides DIDŽIOSIOMIS raidėmis.

function getInitials(firstName, lastName) {
    if (!firstName || !lastName) {
        console.log("Neteisingi duomenys");
        return;
    }
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    
    console.log(firstInitial + lastInitial);
}
getInitials('Valdas', 'Damidavičius');

// 5. Sukurkite HTML div’ą su id “numberPlace”. Parašykite funkciją kuri priimtų kintamąjį, skaičių ir jį atspausdintų tame HTML elemente.

function printNumber(number) {

    const numberPlace = document.getElementById("numberPlace");
    
    if (numberPlace) {
        numberPlace.textContent = number;
    } else {
        console.error("Elementas su id 'numberPlace' nerastas.");
    }
}
printNumber(123);

// 6. Sukurkite Funkciją kuri priima masyva, prasuka ciklą ir atspausdina (consolėje) 
// kiekvieną elementą vienoje eilutėje, atskirtus kableliais, po paskutinio elemento kabliataškis.


// 7. Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.


// 8. Sukurkite Funkciją kuri sugeneruotų random sveikųjų skaičių masyvą ir jį gražintų.
// Funkcija priima tris int tipo kintamuosius, min, max ir length reikšmėms nustatyti.

function generateRandomArray(min, max, length) {
    // Patikrina, ar parametrai teisingi
    if (min >= max) {
        console.error("Min reikšmė turi būti mažesnė už max reikšmę.");
        return [];
    }

    if (length <= 0) {
        console.error("Length reikšmė turi būti didesnė už 0.");
        return [];
    }

    // Sukuria tuščią masyvą
    const randomArray = [];

    // Generuoja atsitiktinius skaičius ir prideda juos į masyvą
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }

    // Gražina sugeneruotą masyvą
    return randomArray;
}

// Pavyzdys kaip naudoti funkciją
const min = 1;
const max = 100;
const length = 10;
const randomArray = generateRandomArray(min, max, length);
console.log(randomArray);

// 9. Sukurkite Funkciją kuri panaudotų 8toje užduotyje sugeneruotą masyvą (priimtų kaip kintamąjį), susumuotų ir gražintų reikšmę.


// 10. Sukurkite Funkciją kuri priimtų 8toje užduotyje sugeneruotą masyvą ir gražintų jos skaičių vidurkį (double).


// 11. Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų 
// su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. 
// Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.