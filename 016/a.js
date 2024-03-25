function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const o = {vardas: 'Jonas', amzius: "22", miestas: 'Vilnius'};

const a1 = ['Jonas', 22, 'Vilnius'];

console.log('o', o);
console.log('a1', a1);

const animals = ['Kiškis', 'Lapė', 'Barsukas', 'Vilkas', 'Laukinis katinas'];



console.log(animals[1]);

// animals[5] = 'Lūšis';
animals.push('Lūšis');

animals[3] = 'Šuo';

// animals[10] = 'Zuikis';

console.log(animals.length);

console.log(animals);


// atspausdinti visus animals masyvo elementus

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// atspausdinti porinių indeksų animals masyvo elementus

for (let i = 0; i < animals.length; i = i + 2) {
    if (i % 2 === 0) {
        console.log(animals[i]);
    }
}

// atspausdinti gyvūnus, kurių pavadinimas ilgesnis nei 6 raidės iš animals masyvo

for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > 6) {
        console.log(animals[i]);
    }
    // animals[i].length > 6 && console.log(animals[i]);
}

// Sukurti masyvą, su 5 atsitiktiniais skaičiais nuo 1 iki 10

const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(rand(1, 10));
}

console.log(numbers);

// suskaičiuoti penketus

let penketukai = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 5) {
        penketukai++;
    }
}
console.log('Penketukai', penketukai);

// sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10 kuriame mažiausiai 3 skaičiai yra penketukai

// let numbers2;

// do {
//     numbers2 = []
//     penketukai = 0;
//     count++;
//     for (let i = 0; i < 5; i++) {
//         const sk = rand(1, 10);
//         numbers2.push(sk);
//         if (sk ==5) {
//             penketukai++;
//         }
//     }
//     console.log(numbers2);
// } while (penketukai < 3);

// console.log('iteracijų:', count);

animals.push('Zuikis');

animals.unshift('Briedis');

animals.unshift('Keleivinis lektuvas', 'Kregždė', 'Bebras');

animals.push('Lakštingala', 'Tigras', 'Pelekas');

console.log(animals);

animals.pop();
animals.pop();

animals.shift();

console.log(animals);
