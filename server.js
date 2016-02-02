var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('static'));


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(80, function () {
    console.log('Blog listening on port 80!');
});