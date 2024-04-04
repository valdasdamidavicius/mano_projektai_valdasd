function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function gabalas() {
    console.log('-------------------');
}


gabalas();

// 1. sukurti funkcija blueDash, kuri atspausdina 10 melynu bruksneliu. Ta funkcija iskviesti 10 kartu

function blueDash () {
    console.log('%c----------', 'color: skyblue;');
}

for (let i = 0; i < 10; i++) {
    blueDash();
}

function sum(a, b) {   // a ir b yra funkcijos parametrai
    const rez = a + b;
    console.log(rez);
}

sum(4, 5);   // 4 ir 5 yra funkcijos argumentai

// 2. Parasyti funkcija, kuri gauna skaiciu ir atspausdina to skaiciaus sandauga su 6

function sandauga6(x) {
    const rez = x * 6;
    console.log(rez);
}

sandauga6(4);
sandauga6(5);

function megaSum(...list) {
    console.log(list);
}


megaSum(4, 5, 7);

function megaSum(...all) {
    rez = 0;
    for (let i = 0; i < all.length; i++) {
        rez += all[i];
    }
    console.log(rez)
}

megaSum(10, 10, 10, 10, 10);


function returnSum(a, b) {
    const rez = a + b;
    return rez;
}

const s1 = returnSum(8, 5);

console.log(s1);

// 3. Parsyti funkcija, kuri gauna skaiciu ir grazina to skaiciaus kvadrata

function kvadratu(x) {
    return x * x;
}

const k1 = kvadratu(4);

console.log(k1);

const animals = ['cat', 'dog', 'elephant', 'horse', 'rabbit'];

// 1. parasyti funkcija, kuri suskaiciuoja kiek elementu yra masyve

// function countElements(arr) {
//     return arr.length;
// }

const countElements = arr => arr.length;

const rez1 = countElements(animals);

console.log(rez1);

// 2. parasyti funkcija, kuri priima masyva ir grazina pirma elementa

const firstElement = arr => arr[0];

const rez2 = firstElement(animals);

console.log(rez2);

// 3. parasyti funkcija, kuri priima masyva ir grazina paskutini elementa

const lastElement = arr => arr[arr.length - 1];

const rez3 = lastElement(animals);

console.log(rez3);

// 4. Parašyti funkciją, kuri priima masyvą ir grąžina vidurinį elementą (elementų kiekis visada nelyginis skaičius)

const middleElement = arr => arr[Math.floor(arr.length / 2)];

const rez4 = middleElement(animals);

console.log(rez4);

// 5. Parašyti funkciją, kuri priima stringą ir grąžina stringo ilgį

const str = 'racoon';

const stringLength = str => str.length;

const rez5 = stringLength(str);

console.log(rez5);

//6. Parašyti funkciją, kuri priima masyvą ir paskaičiuoja kiek raidžių yra visuose masyvo elementuose. Naudojant 5 užduoties funkciją.

const countLetters = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += stringLength(arr[i]);
    }
    return count;
}

const rez6 = countLetters(animals);

console.log(rez6);

// for

for (let i = 0; i <animals.length; i++) {
    console.log(animals[i]);
}

// for of

for (const animal of animals) {
    console.log(animal);
}

// for in

for (const index in animals) {
    console.log(animals[index]);
}

const houses = {
    house1: 'red',
    bigHouse: 'blue',
    house2: 'green'
};

for (const house in houses) {
    console.log(house, houses[house]);
}



const suma = (c, d) => c + d;
const diff = (c, d) => c - d;
const mult = (c, d) => c * d;
const div = (c, d) => c / d;

const niceCalck = (action, c, d) => {
    const r = action(c, d);
    console.log('%c' + r, 'color: skyblue; font-size: 20px, background-color: gray; padding: 10px; border-radius: 10px;');
}

niceCalck(mult, 5, 3);

const print = text => console.log(text);

animals.forEach(print);

animals.forEach((text, i) =>console.log(i, text));
animals.forEach(text => console.log(text));

// 7. atspausdinti pirmas gyvunu raides naudojant forEach metoda

animals.forEach(animal => console.log(animal[0]));

// 8. suskaiciuoti raidziu kieki visuose gyvunuose naudojant forEach metoda

let count = 0;

animals.forEach(animal => count = count + animal.length);

console.log(count);

// 9. Atspausdinti gyvūnus kurių ilgis yra daugiau nei 4 naudojant forEach metodą

animals.forEach(animal => {
    if (animal.length > 4) {
        console.log(animal);
    }
});

animals.forEach(animal => animal.length > 4 && console.log(animal));





