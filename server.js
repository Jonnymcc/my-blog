var fs = require('fs');
var express = require('express');
var app = express();
var routes = require('./routes');
var morgan = require('morgan')

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('static'));

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('short', {stream: accessLogStream}))

app.use('/', routes);

app.listen(80, function () {
    console.log('Blog listening on port 80!');
});