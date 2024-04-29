const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    const content = '<h1>Bla bla</h1>';
  res.send(content);
});

app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`);
});