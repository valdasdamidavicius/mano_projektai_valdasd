const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory store for shop items
let shopItems = [];
let nextId = 1;

// CRUD operations

// Create a new shop item
app.post('/shopItems', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send('Name and price are required.');
    }

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
    const id = parseInt(req.params.id, 10);
    const item = shopItems.find(i => i.id == id);

    if (!item) {
        return res.status(404).send('Item not found.');
    }

    res.json(item);
});

// Update a shop item by id
app.put('/shopItems/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    const itemIndex = shopItems.findIndex(i => i.id == id);

    if (itemIndex === -1) {
        return res.status(404).send('Item not found.');
    }

    if (!name || !price) {
        return res.status(400).send('Name and price are required.');
    }

    shopItems[itemIndex] = { id, name, price };
    res.json(shopItems[itemIndex]);
});

// Delete a shop item by id
app.delete('/shopItems/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const itemIndex = shopItems.findIndex(i => i.id == id);

    if (itemIndex === -1) {
        return res.status(404).send('Item not found.');
    }

    const deletedItem = shopItems.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
