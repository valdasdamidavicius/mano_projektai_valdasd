function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.


let A = 'Džiugas';
let B = 'Siaurusaitis';

if (A < B) {
    console.log('Džiugas');
} else {
    console.log('Siaurusaitis');
}

// 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let vardas = 'Valdas';
let pavardė = 'Damidavičius';
let gimData = 1984;
let sieMetai = 2024;



console.log('Aš esu Valdas Damidavičius. Man yra 40 metų');

// 3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let name = 'Giedrius';
let surname = 'Savickas';
let ats = 'Iuskas';

console.log(ats);


// 4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let C = 'Once upon a time in hollywood';



// 5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

let d = rand(0, 2);
let o = rand(0, 2);
let r = rand(0, 2);
let f = rand(0, 2);

console.log(d, o, r, f);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;
if (d == 2) {
    dvejetai++;
}
if (o == 2) {
    dvejetai++;
}
if (r == 2) {
    dvejetai++;
}
if (f == 2) {
    dvejetai++;
}

let suma = d + o + r + f;

vienetai = suma - dvejetai * 2;

nuliai = 4 - vienetai - dvejetai;

console.log('Nulių:', nuliai);
console.log('Vienetų:', vienetai);
console.log('Dvejetų:', dvejetai);


// 6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

if (one >= two) {
    console.log(one / two);
} else {
    console.log(two / one);
}

// 7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

function middle(a, b, c) {
    return (a + b + c) - Math.min(a, b, c) - Math.max(a, b, c);
}

let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

console.log(a, b, c);

let middleResult = middle(a, b, c);

console.log(middleResult);

// 8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

// 9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.




