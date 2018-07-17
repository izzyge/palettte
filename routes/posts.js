const express = require('express');
const Post = require('../models/post');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.render('/index',)
})

router.get('/new', (req, res) => {
  res.render('/new');
});

router.post('/', (req, res) => {
  let post = new Post(req.body);

  post.save(function(err, post) {
    if (err) { console.error(err); }

    return res.redirect('/');
  });
});

// for index.js
var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    }

    res.render('posts/index', {
      posts: posts
    });
  });
});

router.get('/posts/new', (req, res) => {
  res.render('/posts/new');
})

module.exports = router;
