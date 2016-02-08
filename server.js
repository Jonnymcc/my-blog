var express = require('express');
var app = express();
var routes = require('./routes');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('static'));

app.use('/', routes);

app.listen(80, function () {
    console.log('Blog listening on port 80!');
});