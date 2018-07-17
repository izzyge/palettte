var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET home page. */
router.get('/', (req, res) => {
  Post.find({}, (err, reviews) => {
    if (err) {
      console.log(err);
    }

    res.render('posts/index', {
      // posts: posts
    })
  });
});

router.get('/posts/new', (req, res) => {
  res.render('posts/new');
});

router.post('/posts', (req, res) => {
  const post = new Post(req.body);

  post.save(function(err, review) {
    if (err) {
      console.log(err);
    }

    return res.redirect('/posts/' + post._id);
  });
});


module.exports = router;
