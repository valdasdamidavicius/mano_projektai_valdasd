function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('2 uzdavinys Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log');

let a = rand(5, 10);

console.log(a);

console.log('4 uzdavinys Pasinaudojus ciklu ir console.log atspausdinkite kintamąjį iš 2 uždavinio 7 kartus');


for (let i = 0; i < 7; i++) {
    console.log(rand(5, 10));
}


console.log('1. Konsolėje išspausdinti žodį "Labas" atsitiktinį nuo 5 iki 10 kiekį kartų');


let what1 = rand(5, 10);

for (let i = 0; i < what1; i++) {
    console.log('Labas');
}

console.log('2. Patobulinti 1 uždavinio kodą, kad rezultatas būtų viena eilutė su visais "Labas" žodžiais');

let what2 = rand(5, 10);
let all = '';

for (let i = 0; i < what2; i++) {
    all = all + 'Labas ';
}

console.log(all);

console.log('3. Konsolėje išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4');

let b = rand(0, 4);
console.log(b);

console.log('4. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4');


for (let i = 0; i < 5; i++) {
    console.log(rand(0, 4));
}

console.log('5. Konsolėje 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4');

for (let i = 0; i < 7; i++) {
    console.log(rand(0, 4));
}


console.log('6. Konsolėje 5 arba 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4');

let what6 = rand(0, 1) ? 5 : 7;

for (let i = 0; i < what6; i++) {
    console.log(rand(0, 4));
}

console.log('7. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4. Dar išspausdinti jų sumą');

let sum7 = 0;

for (let i = 0; i < 5; i++) {
    let sk = rand(0, 4);
    console.log(sk);
    sum7 += sk;
}

console.log('Suma:', sum7);

