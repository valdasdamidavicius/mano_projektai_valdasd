function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const md1 = [
    [1, 2, 3],
    [4, 5, 6, 10],
    [7, 9],
    [11, 12]
];

console.table(md1);

// console.log(md1[2]);

for (let i = 0; i < md1.length; i++) {
    for (let j = 0; j < md1[i].length; j++) {
        console.log(md1[i][j]);
    }
}


const animals2 = [
    ['ant', 'bison', 'camel'],
    ['duck', 'elephant', 'giraffe'],
    ['hippo', 'iguana']
];

//1. išspausdinti visus gyvūnus

for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        console.log(animals2[i][j]);
    }
}

//2. duck pakeisti i dog

for (let i = 0; i < animals2.length; i++) {
    for (let j = 0; j < animals2[i].length; j++) {
        if (animals2[i][j] == 'duck') {
            animals2[i][j] = 'dog';
        }
    }
}

console.table(animals2);


//3. padaryti nauja masyva 5x4, kurio reiksmes yra atsitiktiniai dvizenkliai skaiciai

const newMD2 = [];

for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(rand(10, 99));
    }
    newMD2.push(row);
}

console.table(newMD2);

//4. surasti ir isspausdinti maziausia skaiciu

