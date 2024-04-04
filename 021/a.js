function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];

// forEach
// ka daro: perrenka masyvo elementus
// ka grazina: nieko

animals.forEach(animal => console.log(animal));

// map
// ka daro: perrenka masyvo elementus
// ka grazina: nauja masyva su pakeistais elementais

const newAnimals = animals.map(animal => animal.toUpperCase());

console.log(newAnimals);

// 1. Sukurkite masyvą smallAnimals, kuriame visi didesni nei 5 raidės gyvūnai būtų pakeisti į "big".

const smallAnimals = animals.map(animal => {
    if (animal.length > 5) {
        return 'big';
    }
    return animal;
});

console.log(smallAnimals);

// 2. Sukurti masyvą bigAnimals, kuriame visi gyvūnai su 3 raidėm yra prailginti 5 "*".

const bigAnimals = animals.map(animal => {
    if (animal.length == 3) {
        return animal + '*****';
    }
    return animal;
});

console.log(bigAnimals);

// 3. Sukurkite masyvą animalsStartingWithS, kuriame būtų tik gyvūnai prasidedantys raide "s".

const animalsStartingWithS = animals.filter(animal => animal[0] == 's');

console.log(animalsStartingWithS);

// 4. Sukurkite masyvą animalsWithoutTigers, kuriame nebutų gyvūno "tiger".

const animalsWithoutTigers = animals.filter(animal => animal != 'tiger');

console.log(animalsWithoutTigers);

const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);

const animalsWithOddIndex = withNumbers.filter((_, i) => i % 2 ==1);

console.log(withNumbers);
console.log(animalsWithOddIndex);

// sort
// ka daro: surikiuoja masyvo elementus
// ka grazina: ta pati surikiuota masyva

animals.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
});

console.log(animals);

const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];

digits.sort((a, b) => a - b);

console.log(digits);

// 5. Išrūšiuokite masyvą animals pagal gyvulio ilgį - ilgiausi pradžioje.

animals.sort((a, b) => b.length - a.length);

console.log(animals);

// 6. Išrūšiuokite masyvą animals pagal abėcėlę, naudodami antrą žodžio raidę.

animals.sort((a, b) => a[1].localeCompare(b[1]));

console.log(animals);