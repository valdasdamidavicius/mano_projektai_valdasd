console.log('Welcome');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animals = [
    {animal: 'Racoon', color: 'skyblue'},
    {animal: 'Fox', color: 'orange'},
    {animal: 'Wolf', color: 'gray'},
    {animal: 'Rabbit', color: 'pink'}
];



window.addEventListener('load', _ => {

    let html = '<ul>';

    animals.forEach(a => html +=  `<li style="color:${a.color};">` + a.animal + '</li>');

    html += '</ul>';

    const test = document.querySelector('.test');

    // test.innerHTML = html;

    test.classList.add('back');
    test.classList.remove('test');

    console.log(test.classList.contains('test'));
    console.log(test.classList.contains('back'));

    // setInterval(_ => {
    //     test.classList.toggle('back');
    // }, 1000);

    const top = document.querySelector('.top');
    // const top2 = document.querySelector('.top2');

    // top.innerHTML = '<h1>Labas</h1>';

    const h1 = document.createElement('h1');
    // const h2 = document.createElement('h2');
    
    const text = document.createTextNode('Labas');
    // const text2 = document.createTextNode('Ate');
    
    h1.appendChild(text);
    // h2.appendChild(text2);

    top.appendChild(h1);
    // top.appendChild(h2);

    // top2.appendChild(h1);

    console.log(h1);

    const ul = document.createElement('ul');

    animals.forEach(a => {
        const li = document.createElement('li');
        const text = document.createTextNode(a.animal);
        li.style.color = a.color;
        li.appendChild(text);
        ul.appendChild(li);
    });

    test.appendChild(ul);

});