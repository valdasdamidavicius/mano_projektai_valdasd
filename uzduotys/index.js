console.log('labas');

// 1. Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.

let A = 'Labas';

for (let i = 0; i < 10; i++) {
    console.log(A);
}

// 2. Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.

for (let i = 0; i < 9; i++) {
    console.log(i);
}

// 3. Sukurkite masyvą su dešimt augalų pavadinimų.

let plants = ['bukas', 'tuopa', 'klevas', 'maumedis', 'uosis', 'berzas', 'slyva', 'obelis', 'egle', 'pusis'];

// 4. Atspausdinkite kiekvieną 3čio uždavinio augalą atskiroje eilutėje.

for (let i = 0; i < plants.length; i++) {
    console.log(plants[i]);
}

// 5. Atspausdinkite 3čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).


for (let i = plants.length - 1; i >= 0; i--) {
    console.log(plants[i]);
}


// 6. Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);

for (let i = 10; i <= 50; i += 2) {
    console.log(i);
}

let rezultatas = [];

for (let i = 10; i <= 50; i += 2) {
    rezultatas.push(i);
}

console.log(rezultatas);


// 7. Atspausdinkite kas antrą skaičių nuo 10 iki 50. (pornius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.)
// (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)

for (let i = 10; i <= 50; i += 2) {
    if (i % 10 === 0) {
      continue;
    }
    console.log(i);
}
  

// 8. Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;

let poriniuSkaitiklis = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    poriniuSkaitiklis++;
  }
}

console.log("Kintamasis i turėjo porinę reikšmę " + poriniuSkaitiklis + " kartų.");

// 9. Suskaičiuokite kiek 3čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai. Skaičiuojam abu atskirai.

let trumpesniNei5 = 0;
let ilgesniNei7 = 0;

for (let i = 0; i < plants.length; i++) {
  if (plants[i].length < 5) {
    trumpesniNei5++;
  }
  if (plants[i].length > 7) {
    ilgesniNei7++;
  }
}

console.log("Žodžių trumpesnių nei 5 simboliai: " + trumpesniNei5);
console.log("Žodžių ilgesnių nei 7 simboliai: " + ilgesniNei7);
