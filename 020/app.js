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