var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');


app.get('/', function (req, res) {
    res.render('home', {
        title: 'Welcome to my blog!'
    });
});

app.listen(3000, function () {
    console.log('Blog listening on port 3000!');
});