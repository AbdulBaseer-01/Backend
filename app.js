require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/twitter', (req, res) => {
    res.send('Twitter page');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});