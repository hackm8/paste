const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const Posts = require('../models/Posts');

router.post('/', async (req, res) => {
    const { code } = req.body;
    if (code !== '') {
        const id = shortid.generate();
        Posts.create({
            id: id,
            code: code,
            user: req.cookies.username
        }).then(() => {
            res.redirect('/c/' + id)
        });
    }
});
module.exports = router;
