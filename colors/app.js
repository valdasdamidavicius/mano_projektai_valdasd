const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 80;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const fs = require('node:fs');

app.get('/', (req, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf-8');
    const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    const listItem = fs.readFileSync('./data/listItem.html', 'utf-8');

    let listItems = '';

    data.forEach(li => {
        let liHtml = listItem;
        liHtml = liHtml.replaceAll('{{ID}}', li.id).replace('{{SHAPE}}', li.shape).replace('COLOR', li.color);
        listItems += liHtml;
    });

    html = html.replace('{{NAV}}', nav).replace('{{LI}}', listItems);

    res.send(html);

});

app.get('/create', (req, res) => {
    let html = fs.readFileSync('./data/create.html', 'utf-8');
    const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    html = html.replace('{{NAV}}', nav);
    res.send(html);
});

app.post('/store', (req, res) => {
    const color = req.body.color;
    const shape = parseInt(req.body.shape);
    const id = uuidv4();
    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    data.push({ id, color, shape });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);
    res.redirect(302, 'http://colors.test');
});

app.get('/delete/:id', (req, res) => {

    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    const color = data.find(c => c.id === req.params.id);

    if (!color) {
        let html = fs.readFileSync('./data/404.html', 'utf-8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/delete.html', 'utf-8');
    const nav = fs.readFileSync('./data/nav.html', 'utf-8');
    html = html.replace('{{NAV}}', nav).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replace('COLOR', color.color);
    res.send(html);
    }
});

app.post('/destroy/:id', (req, res) => {
    
    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    data = data.filter(c => c.id !== req.params.id);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);
    res.redirect(302, 'http://colors.test');
});

app.get('/edit/:id', (req, res) => {

    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    const color = data.find(c => c.id === req.params.id);
    if (!color) {
        let html = fs.readFileSync('./data/404.html', 'utf-8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/edit.html', 'utf-8');
        const nav = fs.readFileSync('./data/nav.html', 'utf-8');
        html = html.replace('{{NAV}}', nav).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replaceAll('COLOR', color.color);
        [1, 2, 3].forEach(v => {
            if (v = color.shape) {
                html = html.replace(`{{VAL${v}}}`, 'checked');
            } else {
                html = html.replace(`{{VAL${v}}}`, '');
            }
        });
        res.send(html);
    }
});

app.post('/update/:id', (req, res) => {

    const color = req.body.color;
    const shape = parseInt(req.body.shape);
    let data = fs.readFileSync('./data/colors.json', 'utf-8');
    data = JSON.parse(data);
    data = data.map(c => c.id === req.params.id ? {...c, color, shape} : c);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);
    res.redirect(302, 'http://colors.test');
});


app.listen(port, _ => {
    console.log(`Colors app listening on port ${port}`);
});