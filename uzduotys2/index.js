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
    const numberPlace = document.getElementById('numberPlace');
    numberPlace.textContent = number;
}
printNumber(42);

// 6. Sukurkite Funkciją kuri priima masyva, prasuka ciklą ir atspausdina (consolėje) 
// kiekvieną elementą vienoje eilutėje, atskirtus kableliais, po paskutinio elemento kabliataškis.

function givArr(arr) {
    let rez = '';
    for (let i = 0; i < arr.length; i++) {
        rez += arr[i];
        if (i < arr.length - 1) {
            rez += ', ';
        } else {
            rez += ';';
        }
    }
    console.log(rez);
};
const arr = [5, 7, 3, 8, 9, 2, 1];
givArr(arr);

// 7. Parašykite funkciją kuri priimtų du kintamuosius “nuo” ir “iki”. Funkcija turi sugeneruoti random skaičių tame intervale ir jį GRAŽINTI.

function getRandomNumber(nuo, iki) {
    return Math.floor(Math.random() * (iki - nuo + 1)) + nuo;
}

let randomSkaičius = getRandomNumber(5, 15);
console.log(randomSkaičius);

// 8. Sukurkite Funkciją kuri sugeneruotų random sveikųjų skaičių masyvą ir jį gražintų.
// Funkcija priima tris int tipo kintamuosius, min, max ir length reikšmėms nustatyti.

function generateRandomArray(min, max, length) {
    if (min >= max) {
        console.error("Min reikšmė turi būti mažesnė už max reikšmę.");
        return [];
    }
    if (length <= 0) {
        console.error("Length reikšmė turi būti didesnė už 0.");
        return [];
    }

    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
}

const min = 1;
const max = 100;
const length = 10;
const randomArray = generateRandomArray(min, max, length);
console.log(randomArray);

// 9. Sukurkite Funkciją kuri panaudotų 8toje užduotyje sugeneruotą masyvą (priimtų kaip kintamąjį), susumuotų ir gražintų reikšmę.

function getRandomNumber(nuo, iki) {
    return Math.floor(Math.random() * (iki - nuo + 1)) + nuo;
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
for (let i = 0; i < 10; i++) {
    randomArray.push(getRandomNumber(1, 100));
}

console.log('Sugeneruotas masyvas:', randomArray);

let suma = sumArray(randomArray);
console.log('Masyvo suma:', suma);

// 10. Sukurkite Funkciją kuri priimtų 8toje užduotyje sugeneruotą masyvą ir gražintų jos skaičių vidurkį (double).

function getRandomNumber(nuo, iki) {
    return Math.floor(Math.random() * (iki - nuo + 1)) + nuo;
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
for (let i = 0; i < 10; i++) {
randomArray.push(getRandomNumber(1, 100));
}

console.log('Sugeneruotas masyvas:', randomArray);
let sum = sumArray(randomArray);
console.log('Masyvo suma:', sum);
let vidurkis = calculateAverage(randomArray);
console.log('Masyvo vidurkis:', vidurkis);

// 11. Sukurkite HTML div’ą su id “sequence”. Parašykite funkciją kuri sugeneruotų 10 p tagų 
// su skaičiais juose nuo 1 iki 10 ir atiduotų į tą HTML elementą. 
// Rezultate HTML’e turi matytis 10 p tagų su skaičiais. Šie TURI BŪTI SUGENERUOTI JAVASCRIPTU.

const sequence = document.getElementById('sequence');
        
for (let i = 1; i <= 10; i++) {
    const p = document.createElement('p');
    p.textContent = i;
    sequence.appendChild(p);
}

// sukurti index.html (ar kitaip pavadinti) puslapį. jame sukurti duomenų suvedimo formą su mygtuku submit.
// paspaudus submit turi aktyvuotis javascript.
// forma turi vieną įvesties lauką, į jį paduodame skaičių (tik skaičiu, sveiką)
//submitinus formą, turi ekrane atvizaizduoti: visi to skaičiaus dalikliai, ir kiek jis jų turi.
// .js faile viską aprašyti naudojant kuo daugiau funkcijų.

