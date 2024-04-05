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

function didziausiasMazesnisUz50(A) {
    let didziausias = null;

    A.forEach(function(elementas) {
        if (elementas < 50 && (didziausias === null || elementas > didziausias)) {
            didziausias = elementas;
        }
    });
    return didziausias;
}

console.log("Didžiausias skaičius, mažesnis už 50:", didziausiasMazesnisUz50(A));

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

function sumaNeigiamuKvadratu(A) {
    let suma = 0;

    A.forEach(function(elementas) {
        if (elementas < 0) {
            suma += elementas * elementas;
        }
    });

    return suma;
}

console.log("Neigiamų skaičių kvadratų suma:", sumaNeigiamuKvadratu(A));

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

function ilgiausiasStringas(B) {
    let ilgiausias = '';

    B.forEach(function(elementas) {
        if (typeof elementas === 'string' && elementas.length > ilgiausias.length) {
            ilgiausias = elementas;
        }
    });

    return ilgiausias;
}

console.log("Ilgiausias string'as:", ilgiausiasStringas(B));

// 2. Surasti trumpiausią stringą;


// 3. Surasti stringą, kuris prasideda “a” raide;


// 4. Surasti stringą su daugiausia žodžių;


// 5. Surasti stringą su mažiausiai žodžių;


// 6. Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;


// 7. Suskaičiuoti kiek masyve yra žodžių;


// 8. Suskaičiuoti visas ‘s’ raides;


// 9. Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);


// 10. Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);
