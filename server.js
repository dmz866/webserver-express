const express = require('express');
const hbs = require('hbs');
const port = process.env.port || 3000;

require('./hbs/helpers');

var app = express();

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { nombre: 'dosh' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(port);
});