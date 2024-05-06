const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`033 app listening on port ${port}`);
});