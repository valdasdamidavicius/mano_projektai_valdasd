function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', _ => {

    // naudojantis innerHTML ar insertAdjacentHTML metodais;
    // naudojantis innerText metodu;
    // naudojant css selektorius;
    // naudojant style savybę;

    // Ieškojimas DOM’e

    // Konsolėje atspausdinti H1 tekstą;

    const h1Element = document.querySelector('h1');

    if (h1Element) {
    console.log(h1Element.innerText);
    } else {
        console.log('H1 elementas nerastas.');
    }

    // Konsolėje atspausdinti adresą;


    // Konsolėje atspausdinti i tekstą be žvaigždučių;


    // Konsolėje atspausdinti visus naujus žvėris;


    // Konsolėje atspausdinti visus H2 tagus su žvėrių tipais (be “atsinaujinom” žodžio);


    // Konsolėje atspausdinti kiek yra žirafų (ne žirafas bet kiek jų yra);


    // Konsolėje atspausdinti visas naujas žirafas;


    // Konsolėje atspausdinti kiek yra gyvūnų rūšių (ne rūšis bet kiek jų yra);


    // Suraskite kokia gyvūnų rūšis turi daugiausiai gyvūnų;


    // Suraskite mažiausią kainą;



    // DOM’o modifikavimas

    // “Zoo sodas” pakeiskite į “Zoo parkas”;
    // “***” pakeiskite į “*****”;
    // Pridėkite naują žvėrį “Leopardas” į plėšrūnų sekcijos pabaigą;
    // Pridėkite naują žvėrį “Jūrų sliekas” į gyvačių sekcijos pradžią;
    // Pridėkite “Atsinaujinom” span tage prie žoliaėdžių;
    // Ištrinkite “Atsinaujinom” span tage iš gyvačių;
    // Ištrinkite “Laukinę kiaulę”;
    // Apačioje h2 tago “Plėšrūnai” pridėkite h3 tagą “Neglostyti!”;
    // Pridėkite naują kainą “Studentas 3eur” po tago “Vaikas: 2eur”;
    // Išrūšiuokita “Plėšrūnus pagal abėcėlę”;



    // DOM’o stilius.

    // Nuspalvinkite H1 tagą raudonai;
    // Kontaktus nuspalvinkite pilkai, o adresą span tage palikite juodą;
    // Žvėrių tipų H2 tagus nuspalvinkite mėlynai;
    // “PATINKA” mygtuką apibrėžkite rėmeliu;
    // Nuspalvinkite visus naujus žvėris geltona spalva su pilku fonu;
    // Naudodami stiliaus savybes paslėpkite “Zuikis” li tagą;
    // Panaikinkite sąrašuose “rutuliukus” prieš žvėries pavadinimą;
    // Padidinkite tarpus tarp žvėrių;
    // Tagus span “Atsinaujinom” nuspalvinkite raudonai;
    // Tagus span “Atsinaujinom” padarykite mirksinčius (pasinaudokite setInterval);


















});