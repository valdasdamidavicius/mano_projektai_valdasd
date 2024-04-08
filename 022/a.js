function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function recursion(n) {
    console.log('IN recursion n:', n);
    if (n != 3) {
        recursion(n + 1);
    }
    console.log('END recursion n:', n);
}

recursion(1);

multiArray = [
    [1, [4, 5, 6], 3],
    [[4, [7, 8, [4, [4, 5], 6]]], 5, 6],
    [7, 8, [4, [4, 5], 6]]
];

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            printArray(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
}

printArray(multiArray);


const digitsArray = [1, 4, 3, 0, 5, 9, 7, 1, 0];

let sum = 0;

digitsArray.forEach(item => sum += item);

console.log('suma:', sum);

// reduce
// ką daro: skaičiuoja (nieko)
// ką grąžina: akumuliatoriaus reikšmę

const sum2 = digitsArray.reduce((acc, item) => acc + item, 0);

console.log('suma2:', sum2);

// console.log('max:', max);

// reverse
// ką daro: apverčia masyvą
// ką grąžina: tą patį apverstą masyvą

const colors = ['red', 'green', 'blue', 'yellow', 'black'];

colors.reverse();

console.log('colors:', colors);

// toReversesd
// ką daro: nieko
// ką grąžina: naują masyvą su apversta tvarka

const animals = ['cat', 'dog', 'fish', 'bird', 'elephant'];

const animalsRev = animals.toReversed();

console.log('animals:', animals);
console.log('animalsRev:', animalsRev);

// find
// ką daro: nieko
// ką grąžina: ieško pirmo elemento, kuris tenkina sąlygą arba undefined

const names = ['Jonas', 'Petras', 'Antanas', 'Juozas', 'Ona'];

const foundName = names.find(name => name[0] == 'J');

console.log('foundName:', foundName);

// some
// ką daro: nieko
// ką grąžina: true/false ar bent vienas elementas tenkina sąlygą

const hasOna = names.some(name => name == 'Ieva');

console.log('hasOna', hasOna);


const catsAndOwners = [
    { cat: 'Fluffy', owner: 'Jonas', color: 'white'},
    { cat: 'Garfield', owner: 'Petras', color: 'orange'},
    { cat: 'Marmaduke', owner: 'Ona', color: 'black'},
    { cat: 'Tom', owner: 'Agota', color: 'grey'},
    { cat: 'Jerry', owner: 'Asta', color: 'grey'},
    { cat: 'Sylvester', owner: 'Vytas', color: 'black'},
];

// 1. atspausdinti visus šeimininkus

catsAndOwners.forEach(catAndOwner => console.log(catAndOwner.owner));

// 2. išrinkti visus pilkus katinus

const greyCats = catsAndOwners.filter(catAndOwner => catAndOwner.color == 'grey');

console.log(greyCats);

// 3. prie visų kačių pridėti savybę "age" su atsitiktine reikšme nuo 1 iki 18

const catsWithAge = catsAndOwners.map(catAndOwner => ({ ...catAndOwner, age: rand(1, 18) }));

console.table(catsWithAge);
console.table(catsAndOwners);

// 4. pasendinti visus kačiukus vienais metais

const oldCats = catsWithAge.map(catAndOwner => ({ ...catAndOwner, age: catAndOwner.age + 1 }));

console.table(catsWithAge);
console.table(oldCats);

// 5. išrūšiuoti kačiukus pagal amžių nuo jauniausio iki vyriausio naujame masyve

const sortedCats = catsWithAge.toSorted((a, b) => a.age - b.age);

console.table(sortedCats);