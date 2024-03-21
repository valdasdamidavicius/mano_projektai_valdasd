function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 
// Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą,
//  kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.



let a = rand(1, 6) * 2;

if (a > 8) {
    a = 'Winner';
} else {
    a = 'Losser';
}

console.log(a);







