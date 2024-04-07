function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];


// 1. Surasti didžiausią skaičių;

let greatestNumber = null;
 
A.forEach(element => {
  if (element > greatestNumber) {
    greatestNumber = element;
  }
  return element;
});

console.log(A);
console.log("Didžiausias skaičius:", greatestNumber);

// 2. Surasti mažiausią skaičių;

function maziausiasSkaicius(A) {
    let maziausias = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < maziausias) {
            maziausias = A[i];
        }
    }
    return maziausias;
}

console.log("Mažiausias skaičius:", maziausiasSkaicius(A));


// let smallestNumber = null;
 
// A.forEach(element => {
//   if (element < smallestNumber) {
//     smallestNumber = element;
//   }
//   return element;
// });

// console.log(A);
// console.log(smallestNumber);

// 3. Surasti didžiausią neigiamą skaičių;

function didziausiasNeigiamasSkaicius(A) {
    let didziausiasNeigiamas = null;

    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            if (didziausiasNeigiamas === null || A[i] > didziausiasNeigiamas) {
                didziausiasNeigiamas = A[i];
            }
        }
    }
    return didziausiasNeigiamas;
}

console.log("Didžiausias neigiamas skaičius:", didziausiasNeigiamasSkaicius(A));

// 4. Surasti didžiausią skaičių, kuris yra mažesnis už 50;


let didziausias = null;

A.forEach(elementas => {
    if (elementas < 50 && (didziausias === null || elementas > didziausias)) {
        didziausias = elementas;
    }
    return didziausias;
});
    
console.log("Didžiausias skaičius, mažesnis už 50:", didziausias);

// 5. Suskaičiuoti teigiamų skaičių sumą;

function sumaTeigiamuSkaiciu(A) {
    let suma = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            suma += A[i];
        }
    }
    return suma;
}

console.log("Teigiamų skaičių suma:", sumaTeigiamuSkaiciu(A));

// 6. Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;


let suma = 0;

A.forEach(elementas => {
    if (elementas < 0) {
        suma += elementas * elementas;
    }
    return suma;
});

console.log("Neigiamų skaičių kvadratų suma:", suma);

// 7. Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75

let count = 0;
 
A.forEach(number => {
  if (number >= 25 && number <= 75) {
    count++;
  }
  return number;
});
 
console.log("Kiek skaičių patenka į intervalą 25-75:", count);

// 8. Suskaičiuoti kiek skaičių yra 0-iai;

let count0 = 0;
 
A.forEach(number => {
  if (number === 0) {
    count0++;
  }
  return number;
});
 
console.log("Kiek skaičių yra nuliai:", count0);

//9. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;

let count3 = 0;
 
A.forEach(number => {
  if (number % 3 === 0) {
    count3++;
  }
  return number;
});
 
console.log("Kiek skaičių be liekanos dalinasi iš 3:", count3);

// 10. Suskaičiuoti neigiamų skaičių vidurkį;

let average = 0;
 
A.forEach(number => {
  if (number < 0) {
    average += number;
  }
  return number;
});
 
console.log("Neigiamų skaičių vidurkis:", average / A.length);

const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

console.log(B);


// 1. Surasti ilgiausią stringą;

let ilgiausias = '';

B.forEach(elementas => {
    if (typeof elementas === 'string' && elementas.length > ilgiausias.length) {
        ilgiausias = elementas;
    }
    return ilgiausias;
});

console.log("Ilgiausias string'as:", ilgiausias);

// 2. Surasti trumpiausią stringą;

let trumpiausias = null;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        if (trumpiausias === null || elementas.length < trumpiausias.length) {
            trumpiausias = elementas;
        }
    }
    return trumpiausias;
});

console.log("Trumpiausias string'as:", trumpiausias);

// 3. Surasti stringą, kuris prasideda “a” raide;

let rezultatas = null;

B.forEach(elementas => {
    if (typeof elementas === 'string' && elementas.startsWith('a')) {
        rezultatas = elementas;
        return false;
    }
    return rezultatas;
});

console.log("Pirmas string'as prasidedantis 'a':", rezultatas);

// 4. Surasti stringą su daugiausia žodžių;

let daugiausiaiZodziu = null;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const zodziuSkaicius = elementas.split(' ').length;
        if (daugiausiaiZodziu === null || zodziuSkaicius > daugiausiaiZodziu.split(' ').length) {
            daugiausiaiZodziu = elementas;
        }
    }
    return daugiausiaiZodziu;
});

console.log("String'as su daugiausiai žodžių:", daugiausiaiZodziu);

// 5. Surasti stringą su mažiausiai žodžių;

let maziausiaiZodziu = null;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const zodziuSkaicius = elementas.split(' ').length;
        if (maziausiaiZodziu === null || zodziuSkaicius < maziausiaiZodziu.split(' ').length) {
            maziausiaiZodziu = elementas;
        }
    }
    return maziausiaiZodziu;
});

console.log("String'as su mažiausiai žodžių:", maziausiaiZodziu);

// 6. Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;

let skaicius = 0;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const zodziuSkaicius = elementas.split(' ').length;
        if (zodziuSkaicius > 4) {
            skaicius++;
        }
    }
    return skaicius;
});

console.log("String'ų su daugiau nei 4 žodžius kiekis:", skaicius);

// 7. Suskaičiuoti kiek masyve yra žodžių;

let zodziuKiekis = 0;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const zodziai = elementas.split(' ');
        zodziuKiekis += zodziai.length;
    }
    return zodziuKiekis;
});

console.log("Visų žodžių kiekis masyve:", zodziuKiekis);

// 8. Suskaičiuoti visas ‘s’ raides;

let sSkaicius = 0;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const simboliai = elementas.split('');
        simboliai.forEach(function(simbolis) {
            if (simbolis === 's' || simbolis === 'S') {
                sSkaicius++;
            }
        });
    }
    return sSkaicius;
});

console.log("Visų 's' rašto simbolių kiekis masyve:", sSkaicius);

// 9. Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);

let raidziuSkaicius = 0;

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        raidziuSkaicius += elementas.replace(/\s/g, '').length;
    }
    return raidziuSkaicius;
});

console.log("Raidžių be tarpų kiekis masyve:", raidziuSkaicius);

// 10. Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

let ilgiausias2 = '';

B.forEach(elementas => {
    if (typeof elementas === 'string') {
        const zodziai = elementas.split(' ');
        zodziai.forEach(zodis => {
            if (zodis.length > ilgiausias2.length) {
                ilgiausias2 = zodis;
            }
        });
    }
    return ilgiausias2;
});

console.log("Ilgiausias žodis masyve:", ilgiausias2);


const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

console.log(C);

// 1. Surasti didžiausią skaičių;

let greatestNumber2 = null;
 
C.forEach(element => {
  if (element > greatestNumber2) {
    greatestNumber2 = element;
  }
  return element;
});

console.log("Didžiausias skaičius:", greatestNumber2);

// 2. Surasti trumpiausią stringą;

let trumpiausias2 = null;

C.forEach(elementas => {
    if (typeof elementas === 'string') {
        if (trumpiausias2 === null || elementas.length < trumpiausias2.length) {
            trumpiausias2 = elementas;
        }
    }
    return trumpiausias2;
});

console.log("Trumpiausias string'as:", trumpiausias2);

// 3. Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);


// 4. Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);


// 5. Suskaičiuoti bendrą visų stringų ilgį;

let bendrasIlgis = 0;

C.forEach(elementas => {
    if (typeof elementas === 'string') {
        bendrasIlgis += elementas.length;
    }
    return bendrasIlgis;
});

console.log("Bendras visų string'ų ilgis masyve:", bendrasIlgis);

// 6. Suskaičiuoti vidutinį stringo ilgį;

let bendrasIlgis2 = 0;
let kiekis = 0;

C.forEach(elementas => {
    if (typeof elementas === 'string') {
        bendrasIlgis2 += elementas.length;
        kiekis++;
    }
    return kiekis > 0 ? bendrasIlgis2 / kiekis : 0;
});

console.log("Vidutinis stringo ilgis masyve:", bendrasIlgis2 / kiekis);

// 7. Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;


// 8. Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);


// 9. Rasti ko yra daugiau- stringų ar skaičių;


// 10. Rasti ko yra daugiau- loginių true ar false;

