const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const { v4: uuidv4 } = require('uuid');
const app = express();
const fs = require('node:fs');
const port = 80;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


const animalZoo = [
    {id: 1, name: 'Lion', species: 'Panthera leo', age: 10},
    {id: 2, name: 'Tiger', species: 'Panthera tigris', age: 12},
    {id: 3, name: 'Elephant', species: 'Loxodonta africana', age: 15},
    {id: 4, name: 'Giraffe', species: 'Giraffa camelopardalis', age: 20},
    {id: 5, name: 'Zebra', species: 'Equus zebra', age: 8},
    {id: 6, name: 'Hippopotamus', species: 'Hippopotamus amphibius', age: 25},
    {id: 7, name: 'Crocodile', species: 'Crocodylus niloticus', age: 30},
    {id: 8, name: 'Flamingo', species: 'Phoenicopterus', age: 5},
    {id: 9, name: 'Penguin', species: 'Aptenodytes forsteri', age: 3},
    {id: 10, name: 'Kangaroo', species: 'Macropus', age: 7},
    {id: 11, name: 'Koala', species: 'Phascolarctos cinereus', age: 4},
    {id: 12, name: 'Kookaburra', species: 'Dacelo novaeguineae', age: 2},
    {id: 13, name: 'Platypus', species: 'Ornithorhynchus anatinus', age: 6},
    {id: 14, name: 'Wallaby', species: 'Macropus', age: 5},
    {id: 15, name: 'Dingo', species: 'Canis lupus dingo', age: 8}
];

fs.writeFileSync('./data/animals.json', JSON.stringify(animalZoo));

app.get('/', (req, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf-8');
    data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    const listItem = fs.readFileSync('./data/listItem.html', 'utf-8');
    let listItems = '';
    data.forEach((li) => {
        let liHtml = listItem;
        liHtml = liHtml
        .replace('{{ID}}', li.id)
        .replace('{{NAME}}', li.name)
        .replace('{{SPECIES}}', li.species)
        .replace('{{AGE}}', li.age);
        listItems += liHtml;
    });

    html = html.replace('{{LI}}', listItems);

    res.send(html);

});

app.get('/create', (req, res) => {
    let html = fs.readFileSync('./data/create.html', 'utf-8');
    // const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    // html = html.replace('{{NAV}}', nav);
    res.send(html);
});

app.post('/store', (req, res) => {
    const id = req.body.id
    const name = req.body.name;
    const species = req.body.species;
    const age = req.body.age;
    let data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    data.push({ id, name, species, age });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/animals.json', data);
    res.redirect(302, 'http://animals');
});

app.get('/edit/:id', (req, res) => {

    let data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    const animal = data.find(a => a.id === req.params.id);
    let html = fs.readFileSync('./data/edit.html', 'utf-8');
    // const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    html = html.replace('{{ID}}', animal.id).replace('{{NAME}}', animal.name).replace('{{SPECIES}}', animal.species).replace('{{AGE}}', animal.age);
    res.send(html);
});

app.post('/update/:id', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const species = req.body.species;
    const age = req.body.age;
    let data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    data = data.map(a => a.id === req.params.id ? {...a, name, species, age} : a);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/animals.json', data);
    res.redirect(302, 'http://animals');
});

app.get('/delete/:id', (req, res) => {

    let data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    const animal = data.find(a => a.id === req.params.id);

    if (!animal) {
        let html = fs.readFileSync('./data/404.html', 'utf-8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/delete.html', 'utf-8');
    // const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    html = html.replace('{{ID}}', animal.id).replace('{{NAME}}', animal.name).replace('{{SPECIES}}', animal.species).replace('{{AGE}}', animal.age);
    res.send(html);
    }
});

app.post('/destroy/:id', (req, res) => {
    
    let data = fs.readFileSync('./data/animals.json', 'utf-8');
    data = JSON.parse(data);
    data = data.filter(a => a.id !== req.params.id);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/animals.json', data);
    res.redirect(302, 'http://animals');
});


app.listen(port, _ => {
    console.log(`Animals app listening on port ${port}`);
});