function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', _ => {

    // Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką.
    // Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6
    // ir jį įrašykite į tago vidų naudojant innerText() metodą. Paspaudus mygtuką skaičiai 
    // turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, 
    // juos nudažyti raudonai.

    const h21 = document.querySelector('h2');
    const h22 = document.querySelector('h2 + h2');
    const b1 = document.querySelector('.u1');

    b1.addEventListener('click', _ => {

        const r1 = rand(1, 6);
        const r2 = rand(1, 6);

        if (r1 == r2) {
            h21.style.color = 'crimson';
            h22.style.color = 'crimson';
        } else {
            h21.style.color = 'black';
            h22.style.color = 'black';
        }

        h21.innerText = r1;
        h22.innerText = r2;
    });

    // Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. 
    // Susikurkite tuščią masyvą, skaičiams saugoti. Paspaudus mygtuką, sugeneruokite rand() skaičių 
    // nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėje. 
    // <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą.

    const h3 = document.querySelector('h3');
    const b2 = document.querySelector('.u2');
    const arr = [];

    b2.addEventListener('click', _ => {

        arr.push(rand(1, 10));
        console.log(arr);

        let sum = 0;

        arr.forEach(d => sum += d);

        h3.innerText = sum;
    });


    // Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
    // JS pagalba perskaitykite masyvą africa ir naudodami createElement()  
    // ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą 
    // su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. 
    // Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.

    const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
    const ul = document.querySelector('ul');

    africa.forEach(a => {
        if (a) {
            const li = document.createElement('li');
            const text = document.createTextNode(a);
            li.appendChild(text);
            ul.appendChild(li);
        }
    });

    // Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, 
    // vieną <h5> tagą ir du mygtukus: “+” ir “-”. Suprogramuokite kalkuliatorių taip, 
    // kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais 
    // būtų atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų atvaizduotas <h5> tage. 
    // Pasirinkite patys sau patogiausius metodus tai atlikti.

    const h5 = document.querySelector('h5');
    const i1 = document.querySelector('.i1');
    const i2 = document.querySelector('.i2');
    const u41 = document.querySelector('.u41');
    const u42 = document.querySelector('.u42');

    u41.addEventListener('click', _ => {

        const value1 = parseFloat(i1.value);
        const value2 = parseFloat(i2.value);

        const rez = value1 + value2;

        h5.innerText = rez;
    });

    u42.addEventListener('click', _ => {

        const value1 = parseFloat(i1.value);
        const value2 = parseFloat(i2.value);

        const rez = value1 - value2;

        h5.innerText = rez;
    });

    // (BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
    // JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą 
    // su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. 
    // Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. Generavimo metu 
    // “Dingo” background’ą nuspalvinkite mėlynai.

    const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];
    const australiaUl = document.querySelector('.australia');

    let html = '';

    australia.forEach(a => {
        if (a != 'Dingo') {
            html += `<li>${a}</li>`;
        } else {
            html += `<li style="color:skyblue;">${a}</li>`;
        }
    });

    australiaUl.innerHTML = html;










    
});