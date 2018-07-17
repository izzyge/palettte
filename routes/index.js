var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET home page. */
router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    }

    res.render('posts/index', {
      posts: posts
    })
  });
});

router.get('/posts/new', (req, res) => {
  res.render('posts/new');
});

router.post('/posts', (req, res) => {
  const post = new Post(req.body);

  post.save(function(err, post) {
    if (err) {
      console.log(err);
    }

    return res.redirect('/');
  });
});


module.exports = router;
