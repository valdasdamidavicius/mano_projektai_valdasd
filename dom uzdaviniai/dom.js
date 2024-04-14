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























});