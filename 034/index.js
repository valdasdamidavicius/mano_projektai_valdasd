const express = require('express');
const bodyParser = require('body-parser');
const { message } = require('laravel-mix/src/Log');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());




app.listen(port, _ => {
    console.log(`034 app listening on port ${port}`);
});