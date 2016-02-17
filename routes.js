var express = require('express');
var router = express.Router();
var Post = require('./models').Post;
var moment = require('moment');

router.get('/', function (req, res) {
    Post.find({}, function (err, docs) {
        res.render('home', {docs: docs, moment: moment});
    });
});

router.get('/about', function (req, res) {
    res.render('about');
});

module.exports = router;
