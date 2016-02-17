var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')

var db = mongoose.connection;

var postSchema = mongoose.Schema({
    title: { type: String, default: 'Forget the title...' },
    date: { type: Date, default: Date.now },
    text: String
});

var Post = mongoose.model('Post', postSchema)

exports.Post = Post;