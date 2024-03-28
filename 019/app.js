function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const m2 = m1;

// console.log('m1 === m2', m1 === m2);

// m2[0][0] = 1000;

// const m3 = [...m1];

// console.log('m1 === m3', m1 === m3);

// m3[0][1] = 2000;

// m4 = structuredClone


// let totalSpeed = 0;

// for (let i = 0; i < 10; i++) {
//     const speed = rand(120, 220);
//     console.log(speed);
//     totalSpeed += speed;
// }

// const averageSpeed = totalSpeed / 10;

// console.log('Average speed:', )





//4.


let minSpeed = 121;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const speed = rand(20, 120);
        console.log(speed);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
    }
}

console.log('Min speed:', minSpeed);

// Boso lygis

let km = 0;
let kangaroo;
let steering;
let brakes;

do {
    kangaroo = !!rand(0,1);
    steering = !!rand(0, 1);
    brakes = !!rand(0, 1);
    console.log(km, kangaroo, steering, brakes);
    km++;
} while (!kangaroo || steering ||brakes);



//1. sukurti objektą, kuriame būtų:
// - vardas
// - pavardė
// - amžius


const person = {
    name: 'Valdas',
    surname: 'Damidavičius',
    age: 40
};

//2. pasendinti sukurta objekta 5 metais ir atspausdinti

person.age =  person.age + 5;

console.log(person);


const person1 = {
    name: 'Briedis',
    surname: 'Miškinius',
    age: 15
};
 
const person2 = {
    name: 'Vilkas',
    surname: 'Miškinius',
    age: 53
};
 
const person3 = {
    name: 'Lapė',
    surname: 'Miškinius',
    age: 34
};

const people = [person1, person2, person3];

//3. visus pasendinti 5 metais ir atspausdinti

for (let i = 0; i < people.length; i++) {
    people[i].age = people[i].age + 5;
}

console.table(people);

//4. suskaičiuoti visų žmonių amžių vidurkį ir atspausdinti

let totalAge = 0;

for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}

const averageAge = totalAge / people.length;

console.log('Average age:', averageAge);

//7. parasyti vyriausio zmogaus varda

let oldestPerson = people[0];

for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
        oldestPerson = people[i];
    }
}

console.log('Oldest person:', oldestPerson.name);

//8. Sukurti nauja zmogu ir ideti ji i zmoniu masyvo pradzia

const person4 = {
    name: 'Katinas',
    surname: 'Miskinius',
    age: 23
};

people.unshift(person4);

console.table(people);

const colors = ['crimson', 'gold', 'pink', 'purple', 'skyblue', 'orange'];

//9. Sukurti masyvą eggs su 10 elementų, kurie yra atsitiktinės spalvos iš masyvo colors

const eggs = [];

for (let i = 0; i < 10; i++) {
    eggs.push(colors[rand(0, colors.length - 1)]);
}

console.log(eggs);

//5. Atsitiktiniu budu atspausdinti A arba B raide

const raides = ['A', 'B'];
console.log(raides[rand(0, 1)]);

//6. Sugeneruokite atsitiktinį skaičių nuo 0 iki 4. Jeigu jis didesnis nei 2 atspauzdinkite 'DIDESNIS', kitu atveju 'MAZESNIS'

const randomNumber = rand(0, 4);

if (randomNumber > 2) {
    console.log('Didesnis');
} else {
    console.log('Mazesnis');
}

