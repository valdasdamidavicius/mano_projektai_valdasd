function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];


// 1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).


const person = 'Nausėda';

bitGirls.unshift(person);

console.log(bitGirls);

// 2. Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats. Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių, masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.



function getRandomWeight() {
    let randomNum = rand(0, 1);
    return randomNum === 0 ? 'normalus' : 'storas';
  }
  
  let bitCats = [
  {name: 'Murka', weight: getRandomWeight() },
  {name: 'Rainius', weight: getRandomWeight() },
  {name: 'Meilutė', weight: getRandomWeight() },
  {name: 'Bosas', weight: getRandomWeight() },
  {name: 'Dičkis', weight: getRandomWeight() },
  ];

  console.log(bitCats);