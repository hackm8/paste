const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/c/:id', async (req, res) => {
    let id = req.params.id;
    Posts.findOne({ id: id }).then(post => {
        if (post) {
            let { code, views } = post;
            post.views++;
            post.save(() => {
                res.render('index', { username: post.user, value: code, views: views, id: id, isLogged: req.isLogged });
            })
        } else {
            res.redirect('/');
        }
    });
});

router.get('/raw/:id', async (req, res) => {
    let id = req.params.id;
    Posts.findOne({ id: id }).then(post => {
        if (post) {
            let { code } = post;
            post.save(() => {
                res.end(code);
            })
        } else {
            res.redirect('/');
        }
    });
});


module.exports = router;
