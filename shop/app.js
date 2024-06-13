const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory data store
let shopItems = [];
let nextId = 1;

// Create a new shop item
app.post('/shopItems', (req, res) => {
    const { name, price } = req.body;
    const newItem = { id: nextId++, name, price };
    shopItems.push(newItem);
    res.status(201).json(newItem);
});

// Read all shop items
app.get('/shopItems', (req, res) => {
    res.json(shopItems);
});

// Read a single shop item by id
app.get('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const item = shopItems.find(item => item.id == id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Update a shop item by id
app.put('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const item = shopItems.find(item => item.id == id);
    if (item) {
        item.name = name;
        item.price = price;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Delete a shop item by id
app.delete('/shopItems/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = shopItems.findIndex(item => item.id == id);
    if (itemIndex !== -1) {
        const [deletedItem] = shopItems.splice(itemIndex, 1);
        res.json(deletedItem);
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
